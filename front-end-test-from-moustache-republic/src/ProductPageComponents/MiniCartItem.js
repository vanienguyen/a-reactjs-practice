import React from 'react';
import './ProductPage.css';



class MiniCartItem extends React.Component {

    render() {
        let numOfItems = this.props.numOfItems;
        let sizeLabel = this.props.sizeLabel;

        return (
            <ul className='mini-cart-items-container'>
                <li className='mini-cart-item'>
                    <img src={require('./classic-tee.jpg')}
                         alt='A classic tee image is here!!'
                         className='mini-image'
                    />

                    <div className='mini-cart-item-info'>
                        Classic Tee <br/>
                        {numOfItems} x $75.00 <br/>
                        Size: {sizeLabel}
                    </div>

                </li>
            </ul>
        );
    }
}

export default MiniCartItem;