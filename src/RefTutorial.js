import React, { useRef } from "react";

function RefTutorial() {

  const inputRef = useRef(null);

  const handleOnClick = () => {
    inputRef.current.value = "";
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex.." ref={inputRef} />
      <button onClick={handleOnClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial;