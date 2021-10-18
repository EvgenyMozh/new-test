import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  return (
      
    <div className={s.profile}>
      <div>
        <ProfileInfo />
        <MyPostsContainer  />
      </div>
    </div>

  )

}

export default Profile;