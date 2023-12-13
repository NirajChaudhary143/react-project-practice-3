import Button from "../Button/Button";
import styles from "./intro.module.css";
import "../../App.css";
export default function Intro() {
  return (
    <>
      <div className={`${styles.game_intro_container} container`}>
        <div className={`${styles.image_container}`}>
          <img src="public/images/dices.png" alt="" />
        </div>
        <div className={`${styles.game_title}`}>
          <h1>DICE GAME</h1>
          <div className={`${styles.btn}`}>
            <Button text={"Play Now"}></Button>
          </div>
        </div>
      </div>
    </>
  );
}
