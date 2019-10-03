import React from 'react';
import { useButton } from '../hooks/useButton'
import { Display } from './Display';

export const Dashboard = () => {

    const [strike, handleStrikes, setStrike] = useButton(0);
    const [ball, handleBall, setBall] = useButton(0);
    const [foul, handleFoul, setFoul] = useButton(0);

    return (
        <div className='dashboard-container'>
            <Display strike={strike} ball={ball} foul={foul} />
            <section className='buttons'>
                <button className='display-button'
                    onClick={handleStrikes}>
                    Strike
                        </button>
                <button className='display-button'
                    onClick={handleBall}>
                    Ball
                        </button>
                <button className='display-button'
                    onClick={handleFoul}>
                    Foul
                        </button>
                <button className='display-button'
                >Hit
                </button>
            </section>
        </div>
    )
}