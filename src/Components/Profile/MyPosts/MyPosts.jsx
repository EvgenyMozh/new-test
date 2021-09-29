import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  return (
    <div>
      <h2> {props.message}</h2>
      <div>
        
      </div>
      <div className={s.posts}>
        <Post nettop='Привет я тут' />
        <Post nettop='Меня зовут милка'/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>

  )

}

export default MyPosts;