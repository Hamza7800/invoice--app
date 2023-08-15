import ReactDOM from "react-dom";
import { OverlayContainer } from "../styles/overlay";

const Overlay = ({ onClose }) => {
  return ReactDOM.createPortal(
    <OverlayContainer onClick={onClose}></OverlayContainer>,
    document.querySelector("#overlay")
  );
};

export default Overlay;
