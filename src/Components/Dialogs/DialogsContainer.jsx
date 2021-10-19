import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




/* const DialogsConteiner = () => {
  
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
} */

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }

  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;