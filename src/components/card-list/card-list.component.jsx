import React, { Suspense, lazy } from 'react';
import './card-list.styles.css';
const Card = lazy(() => import('../card/card.component'));

const CardList = (props) => {

    const { movies } = props;
    return (
        <div className="card-list">
            {movies.map((movie) => {

                return (
                    <Suspense fallback={<div className='fallback'>Loading...</div>}>
                        <Card movie={movie} />
                    </Suspense>

                );
            })}
        </div>
    )
}



export default CardList;