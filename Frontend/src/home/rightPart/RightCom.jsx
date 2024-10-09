import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSent from './TypeSent'

function rightCom() {
  return (
    <div className='w-[70%] bg-slate-900'>
      <ChatUser/>
      <div className='overflow-y-auto no-scrollbar' style={{maxHeight:'calc(81vh - 5vh)'}}>
      <Messages/>
      </div>
      <TypeSent/>
    </div>
  )
}

export default rightCom
