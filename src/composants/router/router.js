import React from 'react'; //importation de react
import {Routes, Route} from 'react-router-dom'; //importation des routes react
import Home from '../../pages/home'; //importation de la page d'accueil
import Error from '../../pages/404'
import '../../style/pages/home.css';
// Fonction principale de routage
function Routing(){
    return(
        <div>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
            
        </div>
    );
}

export default Routing; //exportation de la logique de routing