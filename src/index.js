import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import {BrowserRouter} from "react-router-dom"; //importation du routeur de react
import reportWebVitals from './reportWebVitals';
import Routing from './router/router'; //importation de la logique de routing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter>
   <Routing />
</BrowserRouter> 
);

reportWebVitals();

