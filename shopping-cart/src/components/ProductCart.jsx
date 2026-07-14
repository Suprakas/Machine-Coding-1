import { useState } from "react";

const ProductCart = ({ initialProducts }) => {
  const [cartItems, setCartItems] = useState(
    initialProducts.map((item) => ({
      ...item,
      qty: 1,
    }))
  );

  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    qty: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + delta),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCoupon = () => {
    const valid = coupon.trim().toUpperCase() === "GRAB50";

    setIsCouponApplied(valid);

    if (!valid) {
      alert("Invalid Coupon");
    }
  };

  const handleAddProduct = () => {
    const { name, description, price, qty } = productForm;

    if (
      !name.trim() ||
      !description.trim() ||
      Number(price) <= 0
    ) {
      alert("Enter valid product details");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      price: Number(price),
      qty: Number(qty),
    };

    setCartItems((prev) => [...prev, newProduct]);

    setProductForm({
      name: "",
      description: "",
      price: "",
      qty: 1,
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = isCouponApplied ? subtotal * 0.5 : 0;

  const total = subtotal - discount;

  return (
    <div className="container">
      <h1>🛒 Shopping Cart</h1>

      <section className="card">
        <h2>Add Product</h2>

        <input
          name="name"
          placeholder="Product Name"
          value={productForm.name}
          onChange={handleInputChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={productForm.price}
          onChange={handleInputChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={productForm.description}
          onChange={handleInputChange}
        />

        <button onClick={handleAddProduct}>
          Add Product
        </button>
      </section>

      <section>
        {cartItems.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>

            <div className="qty">
              <button
                onClick={() =>
                  handleQuantity(item.id, -1)
                }
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  handleQuantity(item.id, 1)
                }
              >
                +
              </button>
            </div>

            <p>
              <strong>Subtotal:</strong> ₹
              {(item.price * item.qty).toFixed(2)}
            </p>

            <button
              className="danger"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Coupon</h2>

        <div className="coupon">
          <input
            placeholder="Enter GRAB50"
            value={coupon}
            onChange={(e) =>
              setCoupon(e.target.value)
            }
          />

          <button onClick={handleCoupon}>
            Apply
          </button>
        </div>

        <hr />

        <p>
          <strong>Subtotal:</strong> ₹
          {subtotal.toFixed(2)}
        </p>

        {isCouponApplied && (
          <p className="discount">
            Discount: -₹{discount.toFixed(2)}
          </p>
        )}

        <h2>Total: ₹{total.toFixed(2)}</h2>
      </section>
    </div>
  );
};

export default ProductCart;