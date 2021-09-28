import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';



const Profile = () => {
  return (

    <div className={s.content}>
      <img src='fon.jpg'></img>
      <div>
        <a>ava + description</a>
      </div>
      <MyPosts />
    </div>

  )

}

export default Profile;