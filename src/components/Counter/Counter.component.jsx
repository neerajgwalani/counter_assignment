import * as React from "react";
import "./Counter.styles.css";

const { useState } = React;

const Counter = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <div className="counter">
        <button
          className="substraction left-btn"
          onClick={() => {
            if (counter === 1) {
              return;
            }
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <input
          maxLength="4"
          className="input"
          type="text"
          value={counter}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            var val = parseInt(e.target.value, 10);
            console.log(val);
            if (val > 1000) {
              return;
            }
            if (val < 1) {
              return;
            }
            if (isNaN(val)) {
              setCounter(1);
            } else {
              setCounter(parseInt(e.target.value, 10));
            }
          }}
        />
        <button
          className="addition right-btn"
          onClick={() => {
            if (counter === 1000) {
              return;
            }
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
