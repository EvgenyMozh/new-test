import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (

    <div>
      <img src='fon.jpg'></img>
      <div>
        <div className={s.block}>
          ava + description
          </div>
      </div>

    </div>

  )

}

export default ProfileInfo;