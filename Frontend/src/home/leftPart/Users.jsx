import React from "react";
import User from "./User";

function Users() {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-gray-800  rounded-md">
        Messages
      </h1>
      <div
        className="overflow-y-auto no-scrollbar" // Added no-scrollbar class
        style={{ maxHeight: "calc(81vh - 12vh)" }}
      >
        <User />
        <User /> <User /> <User /> <User />
      </div>
    </div>
  );
}

export default Users;
