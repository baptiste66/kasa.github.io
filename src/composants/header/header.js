import React from 'react'; //importation de react
import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import '../../style/composants/header.css'


export default function Header(){ //fonction principale pour l'affichage du banner
return(
<header>
    <nav>
        <img className="header__logo" src={logo} alt="logo kasa"></img>
        
        <div className='header__menu'>
              {/* permet de savoir sur quelle page est l'utilisateur */}
             <NavLink to="/home"className={({ isActive }) => (isActive ? "activated" : "notActivated")}end >
              Accueil
            </NavLink>
            <NavLink to="/propos" className={({ isActive }) => (isActive ? "activated" : "notActivated")}end>
              A Propos
            </NavLink>
        </div>
    </nav>
</header>
)
}

