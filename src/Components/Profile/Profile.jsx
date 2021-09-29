import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';



const Profile = () => {
  return (

    <div>
      <img src='fon.jpg'></img>
      <div>
        <a>ava + description</a>
      </div>
      <MyPosts message='My new post' />
    </div>

  )

}

export default Profile;