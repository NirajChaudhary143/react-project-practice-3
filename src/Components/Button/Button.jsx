import "../../App.css";
import styles from "./Button.module.css";
export default function Button({ text, onClick, borderLess }) {
  return (
    <>
      <button
        className={`${borderLess ? styles.borderless_btn : styles.primary_btn}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
