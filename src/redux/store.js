import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Привет я тут', likesCount: 11 },
                { id: 2, message: 'Меня зовут милка', likesCount: 20 },

            ],
            newPostText: 'text'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Alexandr' },
                { id: 2, name: 'Milka' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Oleg' },
                { id: 5, name: 'Vlad' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'By' },
            ],
            newMessageBody: ''

        }
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
   
}
}





export default store