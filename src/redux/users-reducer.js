const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
       /*  { id: 1, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: false, fullName: 'Evgeny', status: 'Cool', location: {city: 'Perm', country: 'Russia'} },
        { id: 2, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: true, fullName: 'Milka', status: 'Meow-meow', location: {city: 'Yusva', country: 'Russia'} },
        { id: 3, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: false, fullName: 'Dima', status: 'Learn React', location: {city: 'Minsk', country: 'Belarus'} },
 */
    ],    
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state;

    }

}


export const fallowAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;