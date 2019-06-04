import React from 'react';
import './ClassicTeePage.css';
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
            <div className="dropdown" style={{float: 'right'}}>
                <button className="dropbtn">My Cart ({numOfItems})</button>
                <div className="dropdown-content">
                    <div>
                        <MiniCart />
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;