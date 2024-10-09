import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div className="overflow-y-auto no-scrollbar" style={{minHeight:'calc(81vh - 5vh)'}}>
      <Message />
      <Message />
     
    </div>
  );
}

export default Messages;
