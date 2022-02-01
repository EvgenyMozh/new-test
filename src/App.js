import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./Components/common/Preloader/Preloader";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
            <Route path="/profile/:userId?">
              <ProfileContainer />
            </Route>
          </Suspense>
          <Route path="/users">
            <UsersContainer pageTitle={'Samurai'}/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = (props) => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;
