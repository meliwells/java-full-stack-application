import React from 'react';

function Header() {
    return (
        <header className="header">
            <section className="logo">
                <img 
                    src="images/disney_castle.jpg" 
                    alt="castle"
                />
            </section>
            <h1>Disney Snack Tracker</h1>
        </header>
    );
}

export default Header;