import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;
  let onSendMeassageClick = () => {
    props.sendMessage();
  }
  let onNewMassegeChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  
  return (

    <div>
      <div className={s.dialogs} >
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
          <div>
            <div>
              <textarea value={newMessageBody} 
                        onChange={onNewMassegeChange}
                        placeholder='Введите сообщение'></textarea>
            </div>
            <div>
              <button onClick = { onSendMeassageClick }>Отправить</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  )

}

export default Dialogs;