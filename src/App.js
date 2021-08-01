import React, { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState("");

  const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
  };

  const clearInputField = () => {
    setTotal("");
  };

  const removeLastInput = () => {
    setTotal(total.slice(0, -1));
  };

  /* eslint no-eval: 0 */
  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    } catch (err) {
      setTotal("Error");
    }
  };

  return (
    <>
    <div id='heading'>Simple React Calculator</div>
      <div className="container">
        <form>
          <input type="text" value={total} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clearInputField} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={removeLastInput} id="remove">
            C
          </button>
          <button className="highlight" onClick={handleClick} name="/">
            &divide;
          </button>
          <button onClick={handleClick} name="7">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button className="highlight" onClick={handleClick} name="*">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button className="highlight" onClick={handleClick} name="-">
            &minus;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button className="highlight" onClick={handleClick} name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button className="highlight" onClick={calculate} id="total">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
