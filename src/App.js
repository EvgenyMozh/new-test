import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar /> 
        
        <div className='app-wrapper-content'>
          <Route path='/dialogs'>  <Dialogs state={props.state.dialogsPage} /> </Route>
          <Route path='/profile'> <Profile profilePage={props.state.profilePage} 
                                           dispatch={props.dispatch}/> </Route>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component ={Settings} />
          
          

        </div>

      </div>
    </BrowserRouter>)
}



export default App;
