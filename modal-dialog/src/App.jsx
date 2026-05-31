import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>
      {showModal && (
        <Modal
          isOpen={showModal}
          modalClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
