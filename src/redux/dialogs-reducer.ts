import { type } from "os";

const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Alexandr" },
    { id: 2, name: "Milka" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Vlad" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "By" },
  ] as Array<MessageType>,
};
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };

    default:
      return state;
  }
};
type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
export default dialogsReducer;
