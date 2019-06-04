import React from 'react';
import './ClassicTeePage.css';

class NavBar extends React.Component {

    render() {
        const numOfItems = 0;
        return (
            <div className='nav-bar'>
                <div> My Cart ({numOfItems})</div>
            </div>
        );
    }
}

export default NavBar;