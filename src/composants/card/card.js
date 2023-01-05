import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import Data from '../../datas/data'

export default function Card (){
    const [home__image] = useState(0);
    return(
        <section className='card'>
            {Data.map((location) => (
                <NavLink to={`/logement/${location.id}`} className='card__item' key={location.id}>
                    <img className='card__img' src={location.pictures[home__image]} alt='annonce de logement en location' />
                    <h3 className='card__title'>{location.title}</h3>
                </NavLink>
            ))}
        </section>
    );
}
