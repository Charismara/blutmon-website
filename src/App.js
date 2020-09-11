import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDraw/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import GameSection from './components/GameSection/GameSection';


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHander = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHander}/>;
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className="page-container">
          <GameSection/>
        </main>
      </div>
    );
  }
}

export default App;
