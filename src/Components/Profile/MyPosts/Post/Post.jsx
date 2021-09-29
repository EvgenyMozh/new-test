import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
  
  return (

    <div className={s.item}>
      <img src="ava.jpg" />
      <p><button> {props.nettop} </button></p>
      <button>Нажми</button>
    </div>


  )

}

export default Post;