import React from 'react';

function Hero() {
    return ( 
        <diV className="container p-5 mb-5">
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className="mb-5"/>
                <h2 className="mt-5">Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary fs-5 mt-3" style={{width: "15%" , margin: "0 auto"}}>Signup Now</button>
            </div>
        </diV>
     );
}

export default Hero;