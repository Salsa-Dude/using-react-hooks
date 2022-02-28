import React, {useState} from "react";

const StateTutorial = () => {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCounter(counter + 1)
  };

  let handleOnChange = (event) => {
    const newValue = (event.target.value);
    setInputValue(newValue)
  }
  
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
      <br/>
      <input 
        placeholder="enter something..."
        onChange={handleOnChange}
      />
      <br/>
      {inputValue}
    </div>
  );
};


export default StateTutorial;