import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Modal({ isOpen, modalClose }) {

  const modalRef = useRef();
  useClickOutside(modalRef, modalClose);

  if (!isOpen) {
    return null;
  }
  
  return (
    <div ref={modalRef} className="modal-container">
      <p>
        This is my modal component Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nihil officiis vitae esse vero laboriosam veritatis
        quas, soluta cum, itaque labore voluptatum id sit deserunt quidem
        tenetur alias sint dolorum earum?
      </p>
      <button onClick={modalClose}>Close Modal</button>
    </div>
  );
}
