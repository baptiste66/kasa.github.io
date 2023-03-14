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

export default function Logement() {
    const { id } = useParams();
    const infoProduct = Data.find((a) => a.id === String(id));
    return infoProduct ? (
      <div>
        <Header />
        <main>
          <Caroussel />
          <section className="info__product">
            <div className="direction">
              <div className="left">
                <div className="location">
                  <h1>{infoProduct.title}</h1>
                  <h2>{infoProduct.location}</h2>
                </div>
                <div className="tag">
                  {infoProduct.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              </div>
              <div className="right">
                <span className="inline">
                  <p>{infoProduct.host.name}</p>
                  <img
                    src={infoProduct.host.picture}
                    alt="loueur du logement sélectionner"
                  ></img>
                </span>
                <Star star={infoProduct.rating} />
              </div>
            </div>
            <div className="accordion-log">
              <Accordion title="Description"><p>{infoProduct.description}</p></Accordion> 
                <Accordion title="Equipements">
                <ul>
                  {infoProduct.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    ) : (
      <Error />
    );
  }

