import React from 'react';
import s from './Profile.module.css';



const Profile = () => {
  return(

    <div className={s.content}>
      <img src='fon.jpg'></img>
      <div className={'${s.item} ${s.active}'}>
        <a>ava + description</a>
      </div>
      <div >
      <a>My post</a>
      </div>
      <div>
      <a>New posts</a>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
        <a>post1</a>
        </div>
        <div className={s.item}>
        <a>post2</a>
        </div>
      </div>
    </div>

  )

}

export default Profile;