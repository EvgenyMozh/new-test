import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
  
  return (

    <div className={s.item}>
      <img src="ava.jpg" />
       <div>{props.message}</div>
       <div className={s.likesCount}>
       <img src="like.png" /> {props.likesCount}
         </div>
    </div>


  )

}

export default Post;