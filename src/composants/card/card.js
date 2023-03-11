import React from 'react';
import {NavLink} from 'react-router-dom';
import Data from '../../datas/data'

export default function Card (){
    return(
        <section className='card'>
            {Data.map((card) => (
                <NavLink to={`/logement/${card.id}`} className='card__item' key={card.id}>
                    <img className='card__img' src={card.cover} alt='annonce de logement en location' />
                    <h2 className='card__title'>{card.title}</h2>
                </NavLink>
            ))}
        </section>
    );
}
