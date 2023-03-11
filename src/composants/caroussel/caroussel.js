import React,{useState} from "react";
import Data from '../../datas/data'
import '../../style/composants/caroussel.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import { useParams } from "react-router-dom";

export default function Caroussel(){ 
  const {id} = useParams();
  const {pictures} = Data.find((a) => a.id === id);
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
      setSlide(slide ===  pictures.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
      setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
    };

  return(
      <section>
          <div className="slide">
              <img className="slide__left" src={left} alt='flèche gauche' onClick={prevSlide}></img>
              <img className="slide__right" src={right} alt='flèche droite' onClick={nextSlide}></img>
              {pictures.map((img, id) => {
      return (
        <div key={id}>
          {id === slide && (
            <img src={img} alt="Photos du logement" className="slide__image"/>
          )}
          {id === slide && (
            <strong className="slide__number">{slide +1}/{pictures.length}</strong>
          )}
        </div>
      );
    })}
          </div>
      </section>
  )
}

