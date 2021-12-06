import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import fon from "../../../assets/images/fon.jpg";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";




const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      {/* <img src={fon}></img> */}
      <div>
        <div className={s.block}>
          <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


          <h3>{props.profile.fullName}</h3>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.contacts.facebook}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
