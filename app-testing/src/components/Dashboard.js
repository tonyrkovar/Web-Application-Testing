import React, { useState } from 'react';
import { useButton } from '../hooks/useButton'
import { Display } from './Display';

export const Dashboard = () => {

    const [strike, handleStrikes, setStrike] = useButton(0);
    const [ball, handleBall, setBall] = useButton(0);
    const [foul, setFoul] = useState(0);

    if (strike > 3) {
        return setStrike(0) + setBall(0) + setFoul(0);
    }

    if (ball > 4) {
        return setBall(0)
    }

    const foulClick = () => {
        if (strike === 0 || strike === 1) {
            setStrike(strike + 1)
            setFoul(foul + 1)
        } else {
            setFoul(foul + 1)
        }
    }


    return (
        <div className='dashboard-container'>
            <Display strike={strike} ball={ball} foul={foul} />
            <section className='buttons'>
                <button data-testid='strikes' className='display-button'
                    onClick={handleStrikes}>
                    Strike
                    </button>
                <button data-testid='balls' className='display-button'
                    onClick={handleBall}>
                    Ball
                    </button>
                <button data-testid='fouls' className='display-button'
                    onClick={foulClick}
                >
                    Foul
                    </button>
                <button data-testid='hit' className='display-button'
                    onClick={() => {
                        setStrike(0);
                        setBall(0);
                        setFoul(0)
                    }}
                >Hit
                </button>
            </section>
        </div>
    )
}