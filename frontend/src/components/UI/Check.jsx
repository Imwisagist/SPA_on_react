import React from 'react';
import "./Check.css"

const Check = ({text, name}) => {

  return (
    <>
      <label className="check">
        <input className="check__radio" type="radio" name={name} value={text}/>
        <img className="check__img" src="/img/check.svg" alt="checkbox"/>
        <span className="check__text">{text}</span>
      </label>
    </>
  );
};

export default Check;
