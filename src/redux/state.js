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
            ]

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
       if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
       
    }
   
}

export const addPostActionCreator = () => {
       return {
           type: 'ADD-POST'
       }
}
export const updateNewTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-TEXT', newText: text
    }
}



export default store;