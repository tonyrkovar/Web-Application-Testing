import React from 'react';

export const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <section className='buttons'>
                <button className='display-button'>Strike</button>
                <button className='display-button'>Ball</button>
                <button className='display-button'>Foul</button>
                <button className='display-button'>Hit</button>
            </section>
        </div>
    )
}