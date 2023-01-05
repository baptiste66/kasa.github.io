import React from 'react';
import '../../style/composants/accordion.css';
//import up from '../../assets/up.png';
import down from '../../assets/down.png';



export default function accordion(props){ 
    return(
<section className='accordion'>
    <div className='accordion__title'>
        <h3>{props.title}</h3>    
        <img className='down' src= {down} alt= "down"></img>
    </div>
    <div className='accordion__txt'>
<p>{props.content}</p>
</div>
</section>
    )
}