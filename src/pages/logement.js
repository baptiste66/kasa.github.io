import React from 'react';
import Header from '../composants/header/header';
import Footer from '../composants/footer/footer';
import Data from '../datas/data'
import Error from '../pages/404'
import { useParams } from 'react-router-dom';
import Caroussel from '../composants/caroussel/caroussel'
import Accordion from '../composants/Accordion/Accordion'
import Star from '../composants/star/star'
import '../style/pages/logement.css'
import'../style/composants/caroussel.css'


export default function Logement(){ 
    const {id} = useParams();
    const infoProduct = Data.find((a) => a.id === id);
    const {title, location, tags, host, rating, description, equipments} = infoProduct
// boucle pour tag pour les séparer
    return(infoProduct ?
        <div>
        <Header/>
        <main>
        <Caroussel/>
        <section className='info__product'>
            <div className='direction'>
            <div className='left'>
            <div className='location'>
           <h1>{title}</h1> 
           <h2>{location}</h2>
           </div>
           <div className='tag'>
            {tags.map((tag) => (
                <p key={tag}>{tag}</p>
            ))}
            </div>
            </div>
           <div className='right'>
            <p>{host.name}</p>
            <img src={host.picture} alt='loueur du logement sélectionner'></img>
            <Star star={rating}/>
           </div>
            </div>
           <div className='accordion-log'>
            <Accordion title='description' content={description} />
            <Accordion title='equipements' content={
                            <ul>
                                {equipments.map((equipment) => (
                                    <li key={equipment}>{equipment}</li>
                                ))}
                            </ul>
                        } />  
            
           </div>
        </section>
        </main> 
        <Footer/>
        </div>:<Error/>
    )
}