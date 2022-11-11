import React from 'react';
import './style.css';

function Cube({ count, i, change }) {

    return (
        <section className='cubeContainer'>
            <div className="wrap">
                <div className={change? 'cube' : 'cubeChange'}>
                    <div className="front">
                        {count[i]}
                    </div>
                    <div className="back">2</div>
                    <div className="top">3</div>
                    <div className="bottom">4</div>
                    <div className="left">5</div>
                    <div className="right">6</div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Cube);