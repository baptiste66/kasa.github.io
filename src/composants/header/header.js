import React from 'react'; //importation de react
import logo from "../../assets/LOGO.png";
import '../../style/composants/header.css'

export default function Header(){ //fonction principale pour l'affichage du banner
return(
<header>
    <nav>
        <img className="header__logo" src={logo} alt="logo kasa"></img>
        <div className='header__menu'>
        <a  href='/error'>Accueil</a>
        <a className='no_decoration' href='/'>A Propos</a>
        </div>
    </nav>
</header>
)
}

