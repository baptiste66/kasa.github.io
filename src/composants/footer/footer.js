import React from 'react'; //importation de react
import logo from "../../assets/LOGO.png";
import '../../style/composants/header.css'

export default function Footer(){ //fonction principale pour l'affichage du banner
return(
<footer>
    <nav>
        <img className="header__logo" src={logo} alt="logo kasa"></img>
       <p className='crédit'>© 2020 Kasa. All rights reserved</p>
    </nav>
</footer>
)
}
