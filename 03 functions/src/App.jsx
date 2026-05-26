import React from "react";

const App = () => {
  // const btnclicked = ()=>{
  //   console.log("button is clicked")
  // }
  // const mouseEnter = ()=>{
  //   console.log("mouse is clicked")
  // }


function inputchanging(elem){
  console.log(elem)
}


  return (
    <div>

<input onChange={function(elem){

inputchanging(elem.target.value)
}} type="text" placeholder="Enter Name" />


    </div>
  );
};

export default App;
