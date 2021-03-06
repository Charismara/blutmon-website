import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDraw/DrawerToggleButton';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar__logo"><a href="/">BlutmondGilde</a></div>
            <div className="spacer"></div>
            <div className="navbar__navigation_items">
                <ul>
                    <li><a href="https://app.kosmi.io/room/956fp3">Watch as Clan</a></li>
                    <li><a href="https://discord.gg/KSTSZsF">Discord</a></li>
                    <li><button href="" onClick={props.loginClickHandler}>Einloggen</button></li>
                    <li><button href="" onClick={props.registerClickHandler}>Registrieren</button></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;
