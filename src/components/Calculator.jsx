import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [count, setCount] = useState("0");
  const [result, setResult] = useState(0);

  function handleNumber(e) {
    if (operator === "") {
      setNum1((pre) => {
        let newVal1 = pre + e;
        setCount(`${newVal1} ${operator} ${num2}`);
        return newVal1;
      });
    } else if (result === 0) {
      setNum2((pre) => {
        let newVal2 = pre + e;
        setCount(`${num1} ${operator} ${newVal2}`);
        return newVal2;
      });
    }
  }

  function handleOperator(e) {
    if (num1 !== "" && num2 === "") {
      setOperator(e);
      setCount(`${num1} ${e} ${num2}`);
    } else if (num1 === "") {
      alert("Choose a Number");
    }
  }

  function handleResult() {
    if (operator === "+") {
      setResult(Number(num1) + Number(num2));
    } else if (operator === "-") {
      setResult(Number(num1) - Number(num2));
    } else if (operator === "*") {
      setResult(Number(num1) * Number(num2));
    } else if (operator === "/") {
      setResult(Number(num1) / Number(num2));
    }
  }

  function handleReset() {
    setNum1("");
    setNum2("");
    setOperator("");
    setCount("0");
    setResult(0);
  }

  return (
    <>
      <p className="result">{result}</p>
      <div className="container">
        <div className="cal">
          <p className="count">{count}</p>
          <div className="row1">
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              7
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              8
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              9
            </button>
            <button onClick={(e) => handleOperator(e.target.textContent)}>
              /
            </button>
          </div>
          <div className="row2">
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              4
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              5
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              6
            </button>
            <button onClick={(e) => handleOperator(e.target.textContent)}>
              *
            </button>
          </div>
          <div className="row3">
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              1
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              2
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              3
            </button>
            <button onClick={(e) => handleOperator(e.target.textContent)}>
              -
            </button>
          </div>
          <div className="row4">
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              0
            </button>
            <button onClick={(e) => handleNumber(e.target.textContent)}>
              .
            </button>

            <button onClick={() => handleResult()}>=</button>
            <button onClick={(e) => handleOperator(e.target.textContent)}>
              +
            </button>
          </div>
        </div>
        <button className="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Calculator;
