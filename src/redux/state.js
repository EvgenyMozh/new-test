let rerenderEntireTree = () =>{

}
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привет я тут', likesCount: 11 },
            { id: 2, message: 'Меня зовут милка', likesCount: 20 },
            
        ],
        newPostText: ''
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
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;