import React from 'react';
import './ProductPage.css';
import NavBar from "./NavBar";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.addHoveredClass = this.addHoveredClass.bind(this);

        this.smallOnClick = this.smallOnClick.bind(this);
        this.mediumOnClick = this.mediumOnClick.bind(this);
        this.largeOnClick = this.largeOnClick.bind(this);

        this.cartButtonOnClick = this.cartButtonOnClick.bind(this);

        this.state = {
            small: {
                isHovered: false,
                isClicked: false,
            },

            medium: {
                isHovered: false,
                isClicked: false
            },

            large: {
                isHovered: false,
                isClicked: false
            },

            addToCart: {
                isHovered: false,
                isClicked: false
            },

            isSSelected: false,
            numOfSSelected: 0,
            sClickedClass: '',

            isMSelected: false,
            numOfMSelected: 0,
            mClickedClass: '',

            isLSelected: false,
            numOfLSelected: 0,
            lClickedClass: '',

            sizeLabelSelected: '',


        };
    }

    onMouseOver(e) {
        this.setState({
            [e.target.getAttribute('name')]: {
                isHovered : !this.state[e.target.getAttribute('name')].isHovered,
            }
        });
    }

    onMouseLeave(e) {
        this.setState({
            [e.target.getAttribute('name')]: {
                isHovered : !this.state[e.target.getAttribute('name')].isHovered,
            }
        });
    }

    addHoveredClass (mouseEvent, arrayClass, className) {
        if(mouseEvent) {
            arrayClass.push(className);
        } else {
            arrayClass[2] = '';
        }
    }


    smallOnClick() {
        this.setState({
            isSSelected: true,
            isMSelected: false,
            isLSelected: false,
            sClickedClass: 'clicked-size-label',
            mClickedClass: '',
            lClickedClass: '',
            sizeLabelSelected: 'S',
        });
    }

    mediumOnClick() {
        this.setState({
            isSSelected: false,
            isMSelected: true,
            isLSelected: false,
            sClickedClass: '',
            mClickedClass: 'clicked-size-label',
            lClickedClass: '',
            sizeLabelSelected: 'M',
        });
    }

    largeOnClick() {
        this.setState({
            isSSelected: false,
            isMSelected: false,
            isLSelected: true,
            sClickedClass: '',
            mClickedClass: '',
            lClickedClass: 'clicked-size-label',
            sizeLabelSelected: 'L',
        });
    }

    cartButtonOnClick() {
        if(this.state.isSSelected) {
            this.setState({
                numOfSSelected: this.state.numOfSSelected + 1,
                isSSelected: false,
                sClickedClass: '',
                sizeLabelSelected: '',
            });

        } else if (this.state.isMSelected) {
            this.setState({
                numOfMSelected: this.state.numOfMSelected + 1,
                isMSelected: false,
                mClickedClass: '',
                sizeLabelSelected: ''
            });

        } else if (this.state.isLSelected) {
            this.setState({
                numOfLSelected: this.state.numOfLSelected + 1,
                isLSelected: false,
                lClickedClass: '',
                sizeLabelSelected: ''
            });

        } else {

        }
    }


    render() {
        const small = ['s-size', this.state.sClickedClass];
        const medium = ['m-size', this.state.mClickedClass];
        const large = ['l-size', this.state.lClickedClass];

        const hoveredSizeClass = 'hovered-size-label';
        const selectedSizeValue =  this.state.sizeLabelSelected;

        this.addHoveredClass(this.state.small.isHovered, small, hoveredSizeClass);
        this.addHoveredClass(this.state.medium.isHovered, medium, hoveredSizeClass);
        this.addHoveredClass(this.state.large.isHovered, large, hoveredSizeClass);


        const cartButtonOnMouseOver = this.state.addToCart.isHovered;
        const cartButtonClass = ['add-to-cart'];

        if(cartButtonOnMouseOver) {
            cartButtonClass.push('hovered-add-to-cart');

        } else {
            cartButtonClass[1] = '';
        }
        return (
            <div className='container-fluid'>
                <NavBar numOfSmallTee={this.state.numOfSSelected}
                        numOfMediumTee={this.state.numOfMSelected}
                        numOfLargeTee={this.state.numOfLSelected}
                />

                <div className='content-container container-fluid'>
                    <div className='row'>
                        <div className='product-image-container col-lg'>
                            <img src={require('./classic-tee.jpg')}
                                 alt='A classic tee image is here!!'
                                 className='product-image'/>
                        </div>

                        <div className='product-info-container col-lg'>

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
                                &nbsp;
                                <span className='size-label'> {selectedSizeValue} </span>
                            </div>

                            <div className='size-container'>
                                <div className={small.join(' ')}
                                     name = 'small'
                                     onMouseOver={this.onMouseOver}
                                     onMouseLeave={this.onMouseLeave}
                                     onClick={this.smallOnClick}
                                >
                                    S
                                </div>

                                <div className={medium.join(' ')}
                                     name = 'medium'
                                     onMouseOver={this.onMouseOver}
                                     onMouseLeave={this.onMouseLeave}
                                     onClick={this.mediumOnClick}
                                >
                                    M
                                </div>

                                <div className={large.join(' ')}
                                     name = 'large'
                                     onMouseOver={this.onMouseOver}
                                     onMouseLeave={this.onMouseLeave}
                                     onClick={this.largeOnClick}
                                >
                                    L
                                </div>
                            </div>

                            <div className={cartButtonClass.join(' ')}
                                 name = 'addToCart'
                                 onMouseOver={this.onMouseOver}
                                 onMouseLeave={this.onMouseLeave}
                                 onClick={this.cartButtonOnClick}
                            >
                                Add to cart
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProductPage;