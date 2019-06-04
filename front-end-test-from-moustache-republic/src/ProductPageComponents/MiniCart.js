import React from 'react';
import './ProductPage.css';

class MiniCart extends React.Component {

    render() {
        return (
            <div className='mini-cart container-fluid'>
                <ul className='mini-cart-items-container'>
                    <li className='mini-cart-item'>
                        <img src={require('./classic-tee.jpg')}
                             alt='A classic tee image is here!!'
                             className='mini-image'
                        />

                        <div className='mini-cart-item-info'>
                            Classic Tee <br/>
                            1 x $75.00 <br/>
                            Size: S
                        </div>

                    </li>
                    <br/>
                    <li className='mini-cart-item'>
                        <img src={require('./classic-tee.jpg')}
                             alt='A classic tee image is here!!'
                             className='mini-image'
                        />
                        <div className='mini-cart-item-info'>
                            Classic Tee <br/>
                            1 x $75.00 <br/>
                            Size: S
                        </div>

                    </li>
                </ul>
            </div>
        );
    }
}

export default MiniCart;