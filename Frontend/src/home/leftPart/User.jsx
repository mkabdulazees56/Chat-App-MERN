import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-3 p-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1>Abdul Azees</h1>
          <span>mkabdulazees56@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;
