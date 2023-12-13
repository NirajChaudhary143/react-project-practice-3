import "../../App.css";
import styles from "./Button.module.css";
export default function Button({ text }) {
  return (
    <>
      <button className={`${styles.primary_btn}`}>{text}</button>
    </>
  );
}
