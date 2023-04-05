import React, {useEffect, useState} from 'react';
import "./Main.css"
import Button from "../UI/Button";
import Check from "../UI/Check";
import Slider from "../UI/Slider";
import {Link} from "react-router-dom";

const Main = () => {

  const[value, setValue] = useState(68)
  const[scroll, setScroll] = useState(0)

  useEffect(()=>{

    window.addEventListener("scroll", ()=> {
       setScroll(window.pageYOffset)
  })

    return window.removeEventListener('scroll', ()=>{})

  }, [])

  const advantages = [
    {
    img: "/img/car.svg",
    text: "Бесплатный выезд в день обращения"
    },
    {
      img: "/img/medal.svg",
      text: "Гарантия на работу до 5 лет"
    },
    {
      img: "/img/time.svg",
      text: "Жесткое соблюдение сроков"
    }
    ]

  const check = ["Вторичное жилье", "Новостройка", "Офис", "1", "2", "3+", "Студия"]

  return (
    <>
    <main id="main" style={{backgroundPosition: `bottom 0 right -${scroll * 1.6}px`}}>
      <div className="main__wrapper">

        <div className="main__desc">
          <h1 className="main__desc_title">Ремонт под ключ от 2900 руб/м<sup><small>2</small></sup>.</h1>
          <p className="main__desc_subtitle">При заказе ремонта делаем дизайн-проект в подарок</p>
          <hr className="main__desc_hr"></hr>
          <div className="main__desc_advantages">
            {advantages.map(a => (
              <div className="main__desc_advantage" key={a.text}>
              <img className="desc__advantages_img" src={a.img} alt="Логотип преимущества"/>
              <p className="desc__advantages_text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="main__calculate_cost">
          <h2 className="calculate__cost">Рассчитайте стоимость ремонта</h2>
          <div>
            <div className="calculate__apartment_area">
              <span className="calculate__title">Площадь квартиры:</span>
              <span className="apartment__area_meters" id="demo">{value}м<sup><small>2</small></sup></span>
            </div>
            <Slider value={value} setValue={setValue}/>
          </div>


          <p className="calculate__title">Тип жилья:</p>
          <div className="calculate__type_wrapper">
            {check.slice(0, 3).map(e=> (
              <Check text={e} name={'type'} key={e} />
            ))}
          </div>

          <p className="calculate__title">Кол-во комнат:</p>
          <div className="calculate__rooms_wrapper">
            {check.slice(3, ).map(e=> (
              <Check text={e} name={"room"} key={e}/>
            ))}
          </div>
          <div className="calculate__btn_wrapper">
            <Button text="Отправить" type={'submit'}/>
          </div>
        </form>

      </div>

      <section className="scroll">
        <div className="scroll__wrapper">
          <img className='scroll__img' src="img/arrow.svg" width="32px" alt="scroll"/>
          <span className='scroll__text'>SCROLL</span>
        </div>
      </section>
    </main>
  <section>
    <Link to="/table">
      <h2 className="table__link"> Страница с получением данных для таблицы.</h2>
    </Link>
  </section>
    </>
  );
};

export default Main;
