import React from 'react'; //importation de react
import Header from '../composants/header/header';
import Footer from '../composants/footer/footer';
import Banner from '../composants/banner/banner'; 
import Accordion from '../composants/Accordion/Accordion';
import '../style/pages/about.css'

export default function about(){ //fonction principale pour l'affichage de la Home page
    return( 
    <div>
    <Header/>
        <main > 
        <Banner/>
        <section className='about'>
        <div className='container'>
        <span className='container__about'>
  <Accordion  title='Fiabilité'>
    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos 
    sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
  </Accordion>
</span>

        <span className='container__about'><Accordion title="Respect">
       <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
       ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></Accordion></span>

        <span className='container__about'><Accordion title="Service">
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
        N'hésitez pas à nous contacter si vous avez la moindre question.</p></Accordion></span>

        <span className='container__about'><Accordion title="Sécurité"><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à 
        l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
         également des ateliers sur la sécurité domestique pour nos hôtes.</p></Accordion></span>
        </div>
        </section>
        </main>
        <Footer/>
        </div>
    );
}