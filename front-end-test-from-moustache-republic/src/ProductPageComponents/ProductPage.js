import React from 'react';
import './Content.css';
import NavBar from "./NavBar";
import Content from "./Content";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfSmall: 0
        }
    }

    smallOnClick() {
        this.setState({numOfSmall: this.state.numOfSmall + 1})
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