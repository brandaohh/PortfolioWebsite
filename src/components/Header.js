import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <Typed
                    className="typed-text"
                    strings={["Design", "Development", "Photography", "Design  |  Development  |  Photography"]}
                    typeSpeed={40}
                    backSpeed={60}
                />
                <a href="#" class="btn2">Contact me</a>
            </div>
        </div >
    )
}

export default Header