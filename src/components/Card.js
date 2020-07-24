import React from "react";

const Card = ({ text, bg, icon, href }) => {
  return (
    <a href={href} className="card__wrapper">
      <div className="card" style={{ backgroundImage: `url(${bg})` }}>
        <div className="card__bottom">
          <img className="card__icon" src={icon} alt={text} />
          <p className="card__text">{text}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
