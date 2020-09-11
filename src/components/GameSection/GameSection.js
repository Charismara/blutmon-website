import React from 'react';
import './GameSection.css';
import GameSectionCard from '../GameSectionCard/GameSectionCard';

const gameSection = props => {
    let rowCount = 3;


    return <div className="row">
        <div className="col">
            <ul className="section">
                <li>
                    <GameSectionCard imgSrc="gw2_icon_resized.png" title="Guild Wars 2" line1="Usere Server: Dzagonur [DE]" line2="Gildenleader: hunter.7123" line3="" />
                </li>
                <li>
                    <GameSectionCard imgSrc="mc_logo.webp" title="Minecraft" line1="GameMaster: MrProfessor" line2="Support: Rizetrabzon" line3="" />
                </li>
                <li>
                    <GameSectionCard imgSrc="league_icon.png" title="League of Legends" line1="Usere Server: EUW, NA" line2="Kontakt: Chαrιsmara" line3="" />
                </li>
                <li>
                <GameSectionCard imgSrc="discord_icon.png" title="Discord" line1="Admin: Professor#0815" line2="https://discord.gg/KSTSZsF" line3="" />
                </li>
                <li>
                <GameSectionCard imgSrc="overwatch_icon.svg" title="Overwatch" line1="Usere Server: EU" line2="Kontakt: Charismara#2601" line3="" />    
                </li>
                <li>
                <GameSectionCard imgSrc="steam_icon.png" title="Steam" line1="Usere Gruppe: BlutmondGilde" line2="Leiter: Professor" line3="" />    
                </li>
            </ul>
        </div>
    </div>

};

export default gameSection;