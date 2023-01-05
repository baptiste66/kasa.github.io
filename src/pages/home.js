import React from 'react'; //importation de react
import Banner from '../composants/banner/banner'; //importation du composant banner
import Header from '../composants/header/header';
import Footer from '../composants/footer/footer';
import '../style/pages/home.css'
import '../style/composants/card.css'
import Card from '../composants/card/card';

export default function home(){ //fonction principale pour l'affichage de la Home page
    return(<div>
        <Header/>
        <main>
           <Banner/>
           <Card/>
        </main>
        <Footer/>
        </div>
    );
}