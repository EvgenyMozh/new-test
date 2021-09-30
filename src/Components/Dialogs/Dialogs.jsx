import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) =>{

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (

    <div>
      <div className={s.dialogs} >
        <div className={s.dialogsItems}>
          <DialogItem name="Alexandr" id="1" />
          <DialogItem name="Milka" id="2" />
          <DialogItem name="Andrey" id="3" />
          <DialogItem name="Oleg" id="4" />
          <DialogItem name="Vlad" id="5" />


        </div>
        <div className={s.messages}>
          <Message message="Hi" />
          <Message message="Hello" />
          <Message message="By" />


        </div>

      </div>
    </div>

  )

}

export default Dialogs;