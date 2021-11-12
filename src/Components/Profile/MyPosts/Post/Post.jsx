import React from 'react';
import s from './Post.module.css';
import like from "../../../../assets/images/like.png";
import ava from "../../../../assets/images/ava.jpg";





const Post = (props) => {

  return (

    <div className={s.item}>
      <img src={ava} />
      <div>{props.message}</div>
      <div className={s.likesCount}>
        <img src={like} /> {props.likesCount}
      </div>
    </div>


  )

}

export default Post;