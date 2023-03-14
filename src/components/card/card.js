import React from 'react';
import Data from '../../datas/data'
import { useNavigate } from 'react-router-dom';



export default function Card (){ const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Vérifier si l'id correspond à un logement dans la liste de données
    const logement = Data.find((logement) => logement.id === id);
    if (logement) {
      navigate(`/logement/${id}`);
    } else {
      navigate('/error');
    }
  };
  return (
    <section className='card'>
      {Data.map((card) => (
        <div className='card__item' key={card.id} onClick={() => handleCardClick(card.id)}>
          <img className='card__img' src={card.cover} alt='annonce de logement en location' />
          <h2 className='card__title'>{card.title}</h2>
        </div>
      ))}
    </section>
  );
}
