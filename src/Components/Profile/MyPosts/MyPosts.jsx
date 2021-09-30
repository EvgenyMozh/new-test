import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  return (
    <div className={s.postBlock}>
      <h2> My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Привет я тут' />
        <Post message='Меня зовут милка' />

      </div>
    </div>

  )

}

export default MyPosts;