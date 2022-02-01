import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
  
});
type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>


const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store
