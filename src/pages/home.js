import React from 'react'; //importation de react
import Banner from '../components/banner/banner'; //importation du composant banner
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../style/pages/home.css'
import '../style/components/card.css'
import Card from '../components/card/card';

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