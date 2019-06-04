import React from 'react';
import './NavBar.css';
import MiniCartItem from "./MiniCartItem";

class NavBar extends React.Component {

    displayMiniCart(num, label) {
        if(num !== 0) {
            return(
                <MiniCartItem numOfItems={num}
                              sizeLabel={label}/>
            )};
    }

    render() {

        const numOfSmallTee = this.props.numOfSmallTee;
        const numOfMediumTee = this.props.numOfMediumTee;
        const numOfLargeTee = this.props.numOfLargeTee;

        let numOfItems = numOfSmallTee + numOfMediumTee + numOfLargeTee;

        return (
            <div className='container-fluid'>
                <div className="my-cart-dropdown" style={{float: 'right'}}>
                    <button className="my-cart-button">
                        My Cart ({numOfItems})
                    </button>
                    <div className="my-cart-dropdown-content">
                        <div>
                            <div className='mini-cart container-fluid'>
                                {this.displayMiniCart(numOfSmallTee, 'S')}
                                {this.displayMiniCart(numOfMediumTee, 'M')}
                                {this.displayMiniCart(numOfLargeTee, 'L')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;