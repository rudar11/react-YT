import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-slate-200 h-90 w-80 rounded-xl   m-5 ">
        <div className="flex justify-center pt-4">
          <div className="h-15 w-15 rounded-full overflow-hidden border border-gray-300">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.pixabay.com/photo/2025/09/27/15/48/to-stage-9858926_1280.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="p-5 mt-10">
          <div className="flex flex-wrap gap-2 ">
            <h3 className="font-semibold">{props.company}</h3>
            <p className=" text-xs font-normal opacity-30 m-1">{props.time}</p>
          </div>

          <h2 className="font-semibold">{props.role}</h2>

          <div className="flex flex-wrap gap-1.5 mr-6">
            <p className="px-5 py-2 rounded-2xl bg-slate-300">{props.availblity}</p>
            <p className="px-5 py-2 rounded-2xl bg-slate-300">{props.availblity2}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 my-3">
          <div className="pt-5 pl-5">
            <h2 className="font-semibold text-sm">{props.price}</h2>
            <p className="opacity-50 text-xs">{props.location}</p>

            <div className="flex flex-wrap ">
              <button className="bg-black text-white rounded-2xl p-3  ml-40 -mt-10">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
