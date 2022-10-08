import React, { useState } from 'react';


import './card.styles.css';

const Card = (props) => {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { original_title, id, backdrop_path, vote_average, release_date, original_language, adult, overview } = props.movie;


    return (
        <>
            {showModal &&
                <div className="card-container" key={id} onClick={handleClose}>
                    <p>{`Language: ${original_language}`}</p>
                    <small>{adult ? `Adult: Yes` : `Adult: No`}</small>

                    <p>{`Rating ${vote_average}`}</p>
                    <small>{`OVERVIEW: ${overview}`}</small>
                </div>}

            {!showModal &&

                <div className="card-container" key={id} onClick={handleShow}>
                    <div show={showModal}>
                        <img className="card-image"
                            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                            alt={`Title: ${original_title}`}
                        />
                        <h2>{original_title}</h2>
                        <p>{`Release ${release_date}`}</p>
                        <p>{`Rating ${vote_average}`}</p>
                    </div>
                </div>}
        </>



    )


}

export default Card;


