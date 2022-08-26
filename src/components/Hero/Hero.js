import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
        <div className="left-h">
            <Header />
            <div className='best-ad'>
                <div>
                </div>
                    <span>The Best Fitness Club in the Town</span>

            </div>
            
             </div>    
        <div className="right-h">Right side</div>    

            
        </div>
    );
};

export default Hero;