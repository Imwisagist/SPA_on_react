import React, {useState} from 'react';
import "./Nav.css"
import Button from "../UI/Button";

const Nav = () => {
  const [show, setShow ] = useState(true)

  const links = ['портфолио','цены','схема работы','отзывы','контакты','Гарантия',]
  const popup = ['услуги','статьи','вакансии','франшиза',]


  return (
    <header>
      <div className="logo">
        <img src="https://agrachoff.ru/wp-content/uploads/2022/03/logo-white.svg" width="151px"  alt="Логотип Компании" className="logo__img"/>
      </div>
      <nav className="nav__links">
        <div className="menu__label" onClick={()=> setShow(!show)}>
          <img src={show ?"img/cross.svg" : "img/home.png" } alt="menu img"/>
        </div>
        {show &&  <div className="menu__popup">
          { popup.map(e => <a className="menu__link" href={e} key={e}>{e}</a>)}
        </div>}
        <a href="#" onClick={()=> setShow(!show)} className="nav__link">Меню</a>
        {links.map(link => (
          <a href="#" className="nav__link" key={link}>{link}</a>
        ))}
      </nav>
      <Button text={"Обратный звонок"} type={""}/>
    </header>
  );
};

export default Nav;
