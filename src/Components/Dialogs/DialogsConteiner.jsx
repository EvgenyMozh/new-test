import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';




const DialogsConteiner = () => {
  
  return <StoreContext.Consumer>
     { (store) => {
      let state = store.getState().dialogsPage;

      let onSendMeassageClick = () => {
        store.dispatch(sendMessageCreator())
      }
      let onNewMassegeChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body))
      }

      return <Dialogs updateNewMessageBody={onNewMassegeChange} sendMessage={onSendMeassageClick} dialogsPage={state} />
    }
  }
  </StoreContext.Consumer>


}

export default DialogsConteiner;