const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Привет я тут', likesCount: 11 },
        { id: 2, message: 'Меня зовут милка', likesCount: 20 },

    ],
    newPostText: 'text'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text})
export default profileReducer;