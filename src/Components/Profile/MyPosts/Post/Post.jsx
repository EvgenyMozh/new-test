import React from 'react';
import s from './Post.module.css';



const Post = () => {
  return (

    <div className={s.item}>
      <img src="ava.jpg" />
      <p>post</p>
      <button>Нажми</button>
    </div>


  )

}

export default Post;