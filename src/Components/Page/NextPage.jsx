import "../../App.css";
export default function NextPage() {
  return (
    <>
      <div className="container">
        <div className="error_msg">
          <span>You have not selected any number.</span>
        </div>
        <div className="upper_container">
          <div className="score_container">
            <h1>0</h1>
            <p>Total Score</p>
          </div>
          <div className="choose_number-container">
            <div>
              <button className="ative_btn">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </div>
            <div className="select_number">
              <p>Select Number</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
