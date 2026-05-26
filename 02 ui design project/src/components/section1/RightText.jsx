import React from "react";
import RightCard from "./RightCard";

const RightText = (props) => {
  return (
    //    <div className='h-full p-6 w-2/3 bg-blue-600'>
    <div className="h-full flex flex-nowrap gap-4 p-6 w-2/3 overflow-x-auto rounded-4xl">
      {props.users.map(function (elem ,idx) {
        return <RightCard  key={idx} id={idx} img={elem.img} tag={elem.tag}/>;
      })}
    </div>
  );
};

export default RightText;
