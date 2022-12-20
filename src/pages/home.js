import React from 'react'; //importation de react
import Banner from '../composants/banner/banner'; //importation du composant banner
import Header from '../composants/header/header';

export default function Home(){ //fonction principale pour l'affichage de la Home page
    return(
        <main>
            <Header/>
           <Banner/>
            
        </main>
    );
}