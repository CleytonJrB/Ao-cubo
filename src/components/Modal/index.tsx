import { LoginForm } from "../Login";
import Styles from "./modal.module.scss";

const Modal = () => {
  return (
    <div className={Styles.modal}>
      <LoginForm />
    </div>
  );
};
export default Modal;
