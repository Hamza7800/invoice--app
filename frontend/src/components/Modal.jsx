import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import { ModalContainer } from "../styles/modalStyles.js";

const Modal = ({ title, content, setShowModal, deleteInvoice, id }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClose={() => setShowModal(false)} />
      <ModalContainer>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="btns">
          <button onClick={() => setShowModal(false)} className="cancel">
            Cancel
          </button>
          <button onClick={() => deleteInvoice(id)} className="delete">
            Delete
          </button>
        </div>
      </ModalContainer>
    </>,
    document.querySelector("#modal")
  );
};

export default Modal;
