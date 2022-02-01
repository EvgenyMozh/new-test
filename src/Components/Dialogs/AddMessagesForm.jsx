import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../Utils/Validators/Validators"
import { Textarea } from "../common/FormsControls/FormsControls"
import s from './../Dialogs/Dialogs.module.css';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
         
        <div>
          <Field
            component={Textarea}
            validate={[required, maxLength50]}
            name="newMessageBody"
            placeholder="Введите сообщение"
          />
        </div>
        <div>
          <button className={s.btn}>Отправить</button>
        </div>
      </form>
    )
}
export default reduxForm ({form: 'dialog-add-message-form'}) (AddMessageForm)