import React from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import AddMessagesForm from "./AddMessagesForm";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElement}</div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
        </div>
      </div>
      <AddMessagesForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
