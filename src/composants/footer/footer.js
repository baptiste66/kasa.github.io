import React from 'react'; //importation de react
import logo from "../../assets/LOGO_footer_desktop.png";
import '../../style/composants/header.css'
import '../../style/composants/footer.css'

export default function Footer(){ //fonction principale pour l'affichage du banner
    


return(
<footer>
    <div className='footer__item'>
        <img className="footer__logo" src={logo} alt="logo kasa"></img>
       <p className='credit'>© 2020 Kasa. All rights reserved</p>
    </div>
</footer>
)
}
