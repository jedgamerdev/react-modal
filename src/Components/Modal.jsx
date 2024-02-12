import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [showModal, setShowMModal] = useState(false);

  const toggleModal = () => {
    setShowMModal(!showModal);
  };

  if (showModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open Modal
      </button>

      {showModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <h1>Modal Shit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti porro quisquam aperiam aspernatur. Aspernatur
                voluptatem nisi repellendus enim maiores illo! Libero inventore,
                sequi facere suscipit necessitatibus recusandae voluptate illo
                voluptatum vel eveniet qui! Nobis impedit, distinctio libero
                amet mollitia deleniti perferendis aliquam adipisci quod vel
                dicta ab, iusto illo obcaecati. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Eos repellat veniam sed voluptate
                aperiam cumque asperiores eum, impedit repellendus veritatis
                illum, iusto nisi et earum voluptatibus ipsam rerum quidem at?
                Lorem ipsum,
              </p>
              <button onClick={toggleModal} className="close-btn">
                x
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
