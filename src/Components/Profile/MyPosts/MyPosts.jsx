import React from 'react';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewTextActionCreator(text));
  }
  return (
    <div className={s.postBlock}>
      <h2> My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>

  )

}

export default MyPosts;