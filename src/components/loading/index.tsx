import { Spinner } from "react-bootstrap";
import styles from "./styles.module.scss";
import ReactDOM from "react-dom";

export const Loading = () => {
  return ReactDOM.createPortal(
    <div className={styles.loading}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>,
    document.body
  );
};
