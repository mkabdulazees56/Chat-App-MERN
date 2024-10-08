import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function leftCom() {
  return (
    <div className='w-[30%] bg-black text-white'>
      <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}

export default leftCom
