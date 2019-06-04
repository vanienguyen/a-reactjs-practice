import React from 'react';
import './NavBar.css';
import MiniCart from "./MiniCart";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.cartOnMouseOver = this.cartOnMouseOver.bind(this);

        this.state = {cartOnMouseOver: false}

    }

    cartOnMouseOver() {
        this.setState({cartOnMouseOver: !this.state.cartOnMouseOver})
    }

    render() {
        const numOfItems = 0;
        let miniCart;

        return (
            <div className='container-fluid'>
                <div className="my-cart-dropdown" style={{float: 'right'}}>
                    <button className="my-cart-button">
                        My Cart ({numOfItems})
                    </button>
                    <div className="my-cart-dropdown-content">
                        <div>
                            <MiniCart />
                        </div>
                    </div>
            </div>

            </div>
        );
    }
}

export default NavBar;