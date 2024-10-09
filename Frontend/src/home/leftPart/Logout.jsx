import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
  return (
    <div className="h-[10vh]" >
      <BiLogOutCircle className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 m-2" />
    </div>
  );
}

export default Logout;
