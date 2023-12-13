import Button from "../Button/Button";
import styles from "./intro.module.css";
import "../../App.css";
import { useState } from "react";
import NextPage from "../Page/NextPage";
export default function Intro() {
  var [nextPageVisible, setNextPageVisible] = useState(false);

  return (
    <>
      {nextPageVisible ? (
        <NextPage />
      ) : (
        <div className={`${styles.game_intro_container} container`}>
          <div className={`${styles.image_container}`}>
            <img src="/images/dices.png" alt="" />
          </div>
          <div className={`${styles.game_title}`}>
            <h1>DICE GAME</h1>
            <div className={`${styles.btn}`}>
              <Button
                onClick={() => {
                  setNextPageVisible(true);
                }}
                text={"Play Now"}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
