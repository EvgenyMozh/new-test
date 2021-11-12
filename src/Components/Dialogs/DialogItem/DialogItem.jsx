import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';
import ava from "../../../assets/images/ava.jpg";



const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <img src={ava}/>
      <NavLink to={path}>{props.name}</NavLink>
      
    </div>
  )
}


export default DialogItem;