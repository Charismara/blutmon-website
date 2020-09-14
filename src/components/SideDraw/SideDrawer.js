import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return <nav className={drawerClasses}>
        <img src={require('../../images/blutmond_icon.webp')} alt="icon_placeholder" />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://app.kosmi.io/room/956fp3">Watch as Clan</a></li>
            <li><a href="https://discord.gg/KSTSZsF">Discord</a></li>
            <li><button href="" onClick={props.loginClickHandler}>Einloggen</button></li>
            <li><button href="" onClick={props.registerClickHandler}>Registrieren</button></li>
        </ul>
    </nav >
};

export default sideDrawer