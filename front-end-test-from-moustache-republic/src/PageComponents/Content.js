import React from 'react';

function Content() {
    return (
        <div className='content-container'>

            <div className='product-image-container'>
                <img src={require('./classic-tee.jpg')}
                     alt='A classic tee image is here!!'
                     className='product-image'/>
            </div>

            <div className='product-info-container'>

                <div className='product-name'>
                    Classic Tee
                </div>

                <div className='product-price'>
                    $75.00
                </div>

                <div className='product-description'>

                    Dolor sit amet, consectetur adipiscing elit.
                    Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione
                    est, id officium appellamus dolor sit amet, consectetur adipiscing elit.
                    Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum
                    est, id officium appellamus

                </div>

                <div className='size-word'>
                    Size
                    <span className='asterisk'> * </span>
                </div>

                <div className='size-container'>
                    <div className='size-option'> S </div>
                    <div className='size-option'> M </div>
                    <div className='size-option'> L </div>
                </div>

                <div className='add-to-cart'>
                    Add to cart
                </div>

            </div>
        </div>
    );
}

export default Content;