import React, { useState } from "react";

const Calculator = () => {
  let [nums, setNums] = useState({ num1: "", num2: "" });
  let [error, setError] = useState("");
  let [result, setResult] = useState("");

  let { num1, num2 } = nums;

  function validate() {
    if (!num1) {
      setError("Num1 cannot be empty.");
      setResult("");
    } else if (!num2) {
      setError("Num2 cannot be empty.");
      setResult("");
    } else {
      setError("");
    }
  }

  function evaluate(id) {
    switch (id) {
      case 1:
        setResult(+num1 + +num2);
        break;
      case 2:
        setResult(+num1 - +num2);
        break;
      case 3:
        setResult(+num1 * +num2);
        break;
      case 4:
        setResult((+num1 / +num2).toFixed(4));
        break;
      default:
        setResult("");
    }
  }

  function getResult(id) {
    validate();
    evaluate(id);
  }

  return (
    <div className="calculator-page">
      <div className="calculator-border">
        <div className="calculator-body">
          <h2>React Calculator</h2>
          <input
            type="text"
            placeholder="Num 1"
            onChange={(e) => setNums({ ...nums, num1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Num 2"
            onChange={(e) => setNums({ ...nums, num2: e.target.value })}
          />
          <div className="btns">
            <button onClick={() => getResult(1)}>+</button>
            <button onClick={() => getResult(2)}>-</button>
            <button onClick={() => getResult(3)}>*</button>
            <button onClick={() => getResult(4)}>/</button>
          </div>
          {error ? (
            <div>
              <p className="error-msg">Error!</p>
              <p className="msg">{error}</p>
            </div>
          ) : (
            (result || result === 0) && (
              <div>
                <p className="success-msg">Success</p>
                <p className="msg">Result: {result}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
