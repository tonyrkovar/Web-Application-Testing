import React from 'react';
import { useButton } from '../hooks/useButton'

export const Display = ({ strike, ball, foul }) => {

    // if (strike > 3) {
    //     return setStrike(0) + setBall(0);
    // }

    // if (ball > 4) {
    //     return setBall(0)
    // }



    return (
        <div className='display-container'>
            <section className='info'>
                <div className='display-field'>
                    <h2>Strike</h2>
                    <p>{strike}</p>
                </div>
                <div className='display-field'>
                    <h2>Ball</h2>
                    <p>{ball}</p>
                </div>
                <div className='display-field'>
                    <h2>Foul</h2>
                    <p>{foul}</p>
                </div>
            </section>
        </div>
    )
}