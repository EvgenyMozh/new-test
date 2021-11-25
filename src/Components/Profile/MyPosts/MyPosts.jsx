import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../Utils/Validators/Validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.postBlock}>
      <h2> My posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Введите сообщение"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
