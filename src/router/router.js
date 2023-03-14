import React from 'react'; 
import {Routes, Route,Navigate} from 'react-router-dom';
import Home from '../pages/home'; 
import Error from '../pages/404';
import About from '../pages/about';
import  Logement from '../pages/logement';
import '../style/pages/home.css';

// deux fois home pour le mettre en page de démarrage et renvoyer vers /home et pour renvoyer page err quand change l'url
function Routing(){
    return(
        <div>
           
            <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Error />} />
                <Route path='/about' element={<About />} />
                <Route path='/logement/:id'element={<Logement />}/>
            </Routes>
            
        </div>
    );
}

export default Routing; 