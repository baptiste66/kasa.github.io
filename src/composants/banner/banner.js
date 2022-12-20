/***************************************************************
 ****        Composant "Banner" pour Home + About           ****
 **************************************************************/

 import React from 'react'; //importation de react
 import HomeBanner from '../../assets/banner_desktop.png'; //importation image home
 import AboutBanner from '../../assets/Banner_propos_desktop.png'; //importation image about
 import"../../style/composants/banner.css"

//fonction principale pour l'affichage du banner
 export default function Banner({origin}){ 
     const homeURL = document.location.pathname === '/';
     const bannerImg = homeURL ? HomeBanner:AboutBanner //en fonction de la page demandée
     const bannerImgAlt = homeURL ? "paysage de mer et falaises" : "paysage de lac et montagnes";
     return(
         <section className={'banner '+origin}>
             <img className='banner__img' src={bannerImg} alt={bannerImgAlt}/>
             <p>Chez vous, partout et ailleurs</p> 
         </section>
     );
 }