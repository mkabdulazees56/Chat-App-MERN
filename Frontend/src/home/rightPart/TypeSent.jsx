// import React from "react";
// import { IoSend } from "react-icons/io5";
// function TypeSent() {
//   return (
//     <div className="flex space-x-3 h-[8vh] text-center"> 
//         <div className="w-[70%]">
//       <input
//         type="text"
//         placeholder="Type here"
//         className="input input-bordered w-full"
//       />
//     </div>
//     <button>
//         <IoSend className="text-3xl" />
//     </button>
//     </div>
//   );
// }

// export default TypeSent;


import React from "react";
import { IoSend } from "react-icons/io5";

function TypeSent() {
  return (
    <div className="fixed bottom-5 right-0 flex space-x-3 h-[8vh] text-center p-3 w-full md:w-[70%] items-center">
      <div className="w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <button>
        <IoSend className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSent;
