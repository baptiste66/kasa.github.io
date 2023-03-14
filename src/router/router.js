import React from 'react'; 
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home'; 
import Error from '../pages/404';
import About from '../pages/about';
import  Logement from '../pages/logement';
import '../style/pages/home.css';


function Routing(){
    return(
        <div>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
                <Route path='/about' element={<About />} />
                <Route path='/logement/:id'element={<Logement />}/>
            </Routes>
            
        </div>
    );
}

export default Routing; 