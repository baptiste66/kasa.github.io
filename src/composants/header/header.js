import React from 'react'; 
import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import '../../style/header/header.css'


export default function Header(){
  return(// si is active souligne le titre
<header>
    <nav>
        <a href='/home'><img className="header__logo" src={logo} alt="logo kasa"></img></a>
        
        <div className='header__menu'>
              
             <span><NavLink  to="/"className={({ isActive }) => (isActive ? "activated" : "notActivated")} >
              Accueil
            </NavLink></span>
            <NavLink to="/propos" className={({ isActive }) => (isActive ? "activated" : "notActivated")}>
              A Propos
            </NavLink>
        </div>
    </nav>
</header>
  )
}

