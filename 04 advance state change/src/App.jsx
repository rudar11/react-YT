import React, { useState } from "react";

const App = () => {
  const [counter, setcounter] = useState(0);

  function increasenum() {
    setcounter(counter + 1);
  }
  function decreasenum() {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increasenum} className="gap-5 m-5">
        increase
      </button>
      <button onClick={decreasenum}>dencrease</button>
    </div>
  );
};

export default App;




