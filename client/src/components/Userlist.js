import React from 'react'
import { useSelector } from 'react-redux'
import Usercard from './Usercard';
import './userlist.css';

function Userlist({ping, setping}) {
  const users=useSelector((state)=>state.user.userlist);
  console.log(users);
  return (
    <>
    <h1 className='titlelist'>List of Users for Contact Hub</h1>
    <div className='listuser'>
      {users?.map((el)=><Usercard el={el} ping={ping} setping={setping}/>)}
    </div>
    </>
  )
}

export default Userlist