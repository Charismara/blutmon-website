import React from 'react';
import './GameSection.css';
import GameSectionCard from '../GameSectionCard/GameSectionCard';

const gameSection = props => {
    return <div className="row">
        <div className="col">
            <ul className="section">
                <GameSectionCard imgSrc="gw2_icon_resized.png" title="Guild Wars 2" line1="Usere Server: Dzagonur [DE]" line2="Gildenleader: hunter.7123" line3="" />
                <GameSectionCard imgSrc="mc_logo.webp" title="Minecraft" line1="GameMaster: MrProfessor" line2="Support: Rizetrabzon" line3="" />
            </ul>
        </div>
    </div>

};

export default gameSection;