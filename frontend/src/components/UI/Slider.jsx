import React, {useEffect} from 'react';
import "./Slider.css"

const Slider = ({value, setValue}) => {

  useEffect(()=>{
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min === '' ? '0' : e.min);
      e.style.setProperty('--max', e.max === '' ? '100' : e.max);
      e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
  },[value])

  return (
    <div className="slidecontainer">
      <input type="range" min="1" max="200" value={value} onChange={(e)=> setValue(e.currentTarget.value)} className="styled-slider slider-progress" id="myRange"/>
    </div>
  );
};

export default Slider;
