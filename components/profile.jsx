import React from 'react'
import "./profile.css"
import Avatar from '@mui/material/Avatar';
import HomeLayout from './HomeLayout';

const Profile = () => {

  let {name,email}=JSON.parse(localStorage.getItem('user')) || {}
  return (
        <>
     <div className="MainDiv">
       <Avatar className="ProfileImg" sx={{ bgcolor:"#e60013",width: 120, height: 120,fontSize: "90px",marginLeft:"93px"}}>{name[0] || "U"}</Avatar>
       {/* <img className="ProfileImg" src="https://avatars.githubusercontent.com/u/93372584?v=4" alt="imgLogo" /> */}
        <h1 className="Name">{name}</h1>
        <h5 className="UserName">{email}</h5>
        <div className="SocialFollowing">
        <span>179.5k followers</span> · <span>0 followings</span>
        </div> 
       </div>

       <HomeLayout/>
      
      
        </>
  )
}


export default Profile
