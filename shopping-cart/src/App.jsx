import "./App.css";
import ProductCart from "./components/ProductCart";

const initialProducts = [
  {
    id: 1,
    name: "Shampoo",
    description: "Gentle and Refreshing",
    price: 200,
  },
  {
    id: 2,
    name: "Soap",
    description: "Fragrant and foamy",
    price: 50,
  },
  {
    id: 3,
    name: "Toothpaste",
    description: "Whitening and minty",
    price: 100,
  },
  { id: 4, name: "Conditioner", description: "Smooth and silky", price: 150 },
];

function App() {
  return (
    <>
      <ProductCart initialProducts={initialProducts}/>
    </>
  );
}

export default App;
