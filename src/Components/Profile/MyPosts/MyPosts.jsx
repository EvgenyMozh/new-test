import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postData = [
    {id:1, message: 'Привет я тут', likesCount: 11},
    {id:2, message: 'Меня зовут милка', likesCount: 20},
    
  ]
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
        <Post message={postData [0].message} likesCount={postData [0].likesCount}/>
        <Post message={postData [1].message}  likesCount={postData [1].likesCount}/>

      </div>
    </div>

  )

}

export default MyPosts;