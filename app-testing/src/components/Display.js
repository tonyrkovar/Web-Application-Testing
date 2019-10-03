import React from 'react';

export const Display = () => {
    return (
        <div className='display-container'>
            <section className='info'>
                <div className='display-field'>
                    <h2>Strike</h2>
                    <p>0</p>
                </div>
                <div className='display-field'>
                    <h2>Ball</h2>
                    <p>0</p>
                </div>
                <div className='display-field'>
                    <h2>Foul</h2>
                    <p>0</p>
                </div>
            </section>
        </div>
    )
}