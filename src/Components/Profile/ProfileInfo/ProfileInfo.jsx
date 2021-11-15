import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import fon from "../../../assets/images/fon.jpg";
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <img src={fon}></img> */}
      <div>
        <div className={s.block}>
          <img src={props.profile.photos.large} />
          <ProfileStatus status={'Тут статус'}/>
          <h3>{props.profile.fullName}</h3>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.contacts.facebook}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
