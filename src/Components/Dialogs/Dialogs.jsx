import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />);
  return (

    <div>
      <div className={s.dialogs} >
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          {messagesElement}
        </div>
      </div>
    </div>

  )

}

export default Dialogs;