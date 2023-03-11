
 import React from 'react'; 
 import HomeBanner from '../../assets/banner_desktop.png'; 
 import ProposBanner from '../../assets/Banner_propos_desktop.png'; 
 import"../../style/composants/banner.css"

 export default function Banner({ origin }) {
    const homeURL = document.location.pathname === '/';
    const bannerImg = homeURL ? HomeBanner : ProposBanner; // en fonction de la page demandée
    const bannerImgAlt = homeURL ? 'paysage de mer et falaises' : 'paysage de lac et montagnes';
    const bannerText = homeURL ? <h1 className="banner__txt">Chez vous, partout et ailleurs</h1> : null;
  
    return (
      <section className={`banner ${origin}`}>
        <img className="banner__img" src={bannerImg} alt={bannerImgAlt} />
        {bannerText}
      </section>
    );
  }