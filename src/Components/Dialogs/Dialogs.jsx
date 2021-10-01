import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

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

  let dialogsData = [
    {id:1, name: 'Alexandr'},
    {id:2, name: 'Milka'},
    {id:3, name: 'Andrey'},
    {id:4, name: 'Oleg'},
    {id:5, name: 'Vlad'}
  ]

  let messagesData = [
    {id:1, messages: 'Hi'},
    {id:2, messages: 'Hello'},
    {id:3, messages: 'By'},
    
  ]

  return (
           
    <div>
      <div className={s.dialogs} >
        <div className={s.dialogsItems}>
          <DialogItem name={dialogsData [0].name} id={dialogsData [0].id} />
          <DialogItem name={dialogsData [1].name} id={dialogsData [1].id} />
          {/* <DialogItem name="Andrey" id="3" />
          <DialogItem name="Oleg" id="4" />
          <DialogItem name="Vlad" id="5" /> */}


        </div>
        <div className={s.messages}>
          <Message message={messagesData [0].messages} />
          <Message message={messagesData [1].messages} />
          <Message message={messagesData [2].messages} />


        </div>

      </div>
    </div>

  )

}

export default Dialogs;