import React from 'react'; //importation de react
import Header from '../composants/header/header';
import '../style/composants/error.css'
export default function error(){ //fonction principale pour l'affichage de la Home page
    return(
        <main className='error'>
            <Header/>
            <div className='message'>
            <p ><span className='error__number'>404</span><span className='error__txt'>Oups! La page que vous demandez n'existe pas.</span></p>
            
            <a href='/'>Retourner sur la page d’accueil</a>
            </div>
        </main>
    );
}