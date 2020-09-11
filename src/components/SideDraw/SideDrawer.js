import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://app.kosmi.io/room/956fp3">Watch as Clan</a></li>
            <li><a href="https://discord.gg/KSTSZsF">Discord</a></li>
            <li><a href="/">Unsere Partnerangebote</a></li>
            <li><a href="/">Einloggen</a></li>
            <li><a href="/">Registrieren</a></li>
        </ul>
    </nav>
};

export default sideDrawer