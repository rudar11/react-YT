// import React, { useState } from "react";

// const App = () => {
//   const [counter, setcounter] = useState(0);

//   function increasenum() {
//     setcounter(counter + 1);
//   }
//   function decreasenum() {
//     if (counter > 0) {
//       setcounter(counter - 1);
//     }
//   }

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={increasenum} className="gap-5 m-5">
//         increase
//       </button>
//       <button onClick={decreasenum}>dencrease</button>
//     </div>
//   );
// };

// export default App;






import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);

  function btnclick() {

    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

//Batch update
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))


  }
 
  return (
    <div>
     <h1>{num}</h1>
     <button onClick={btnclick}>click</button>
    </div>
  );
};

export default App;






