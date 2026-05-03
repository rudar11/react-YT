import React from 'react'

const RightCardContent = (props) => {
  return (
    
        <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between text-white">
        <div>{props.id+1}</div>
        <div>
          <p className="text-lg mb-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, possimus ipsam! Vero eos facilis corrupti doloremque
            voluptatum, maiores mollitia obcaecati!
          </p>
          <div>
            <button className="bg-blue-700 text-white font-semibold px-7 py-3 rounded-full ">
              {props.tag}
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default RightCardContent
