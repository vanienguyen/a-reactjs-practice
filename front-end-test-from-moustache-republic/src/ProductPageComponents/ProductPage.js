import React from 'react';
import './ClassicTeePage.css';
import MiniCart from "./MiniCart";
import NavBar from "./NavBar";
import Content from "./Content";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <NavBar/>
                <Content/>
            </div>
        );
    }
}

export default ProductPage;