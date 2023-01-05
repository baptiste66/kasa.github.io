import React from 'react'; //importation de react
import Header from '../composants/header/header';
import Footer from '../composants/footer/footer';
import '../style/pages/error.css'

export default function error(){ //fonction principale pour l'affichage de la Home page
    return( 
    <div>
    <Header/>
        <main className='error'> 
            <div className='message'>
            <p ><span className='error__number'>404</span></p>
                <div className='error__txt'>
                    <p className='txt'>Oups! La page que </p>
                    <p className='txt'>vous demandez n'existe pas.</p>
                </div>
                <a className='underline' href='/home'>Retourner sur la page d’accueil</a>
            </div>
            
        </main>
        <Footer/>
        </div>
    );
}