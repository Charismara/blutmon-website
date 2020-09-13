import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDraw/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import GameSection from './components/GameSection/GameSection';
import LogInForm from './components/LogInForm/LogInForm';


class App extends Component {
  state = {
    sideDrawerOpen: false,
    logInOpen: false,
    registerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHander = () => {
    this.setState({ sideDrawerOpen: false });
  }

  logInHandler = () => {
    this.setState((prevState) => {
      return { logInOpen: !prevState.logInOpen }
    });
  }

  registerHandler = () => {
    this.setState((prevState) => {
      return { registerOpen: !prevState.registerOpen }
    });
  }

  render() {
    let backdrop;
    let loginForm;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHander} />;
    }

    if(this.state.logInOpen){
      loginForm = <LogInForm show={this.state.logInOpen} closeHandler={this.logInHandler}/>
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} loginClickHandler={this.logInHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} loginClickHandler={this.logInHandler}/>
        {backdrop}
        <main className="page-container">
          <GameSection />
          {loginForm}
        </main>
      </div>
    );
  }
}

export default App;
