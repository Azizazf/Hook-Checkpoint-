import React from 'react';
import '../App.css';

const CarteFilm = ({film }) => {
    return (
        <div className='card'>

            <img src={film.posterURL}
                alt={film.title}
                className='carte-img'
            />

            <div className='card-body'>
                <h4 className='card-title'>{film.title}</h4>
                <p className='card-text'>{film.description}</p>
                <span className='badge bg-primary '>{film.rating}</span>
            </div>



        </div>
    );
}


export default CarteFilm;