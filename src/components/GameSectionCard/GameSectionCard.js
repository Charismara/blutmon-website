import React from 'react';
import './GameSectionCard.css'

const gameSectionCard = props => {
    let imgSrc = props.imgSrc;
    let img = <img src={require('../../images/' + imgSrc)} alt="image placeholder" />;
    let title = <h5>{props.title}</h5>;
    let line1 = <p>{props.line1}</p>;
    let line2 = <p>{props.line2}</p>;
    let line3 = <p>{props.line3}</p>;

    return <ul className="cardHolder"><li className="card">
        {img}
        <div>
            {title}
            {line1}
            {line2}
            {line3}
        </div>
    </li></ul>
}

export default gameSectionCard;