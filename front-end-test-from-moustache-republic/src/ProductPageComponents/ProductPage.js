import React from 'react';
import './ProductPage.css';
import NavBar from "./NavBar";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.smallOnMouseOver = this.smallOnMouseOver.bind(this);
        this.smallOnMouseLeave = this.smallOnMouseLeave.bind(this);

        this.mediumOnMouseOver = this.mediumOnMouseOver.bind(this);
        this.mediumOnMouseLeave = this.mediumOnMouseLeave.bind(this);

        this.largeOnMouseOver = this.largeOnMouseOver.bind(this);
        this.largeOnMouseLeave = this.largeOnMouseLeave.bind(this);

        this.addToCartOnMouseOver = this.addToCartOnMouseOver.bind(this);
        this.addToCartOnMouseLeave = this.addToCartOnMouseLeave.bind(this);

        this.addHoveredClass = this.addHoveredClass.bind(this);

        this.smallOnClick = this.smallOnClick.bind(this);
        this.mediumOnClick = this.mediumOnClick.bind(this);
        this.largeOnClick = this.largeOnClick.bind(this);

        this.cartButtonOnClick = this.cartButtonOnClick.bind(this);

        this.state = {
            isSmallHovered: false,
            isMediumHovered: false,
            isLargeHovered: false,
            sizeLabelHovered: '',
            isCartButtonHovered: false,

            isSSelected: false,
            numOfSSelected: 0,
            sClickedClass: '',

            isMSelected: false,
            numOfMSelected: 0,
            mClickedClass: '',

            isLSelected: false,
            numOfLSelected: 0,
            lClickedClass: '',

        };
    }

    smallOnMouseOver() {
        this.setState({
            isSmallHovered: !this.state.isSmallHovered,
            sizeLabelHovered: 'S',
        });
    }

    smallOnMouseLeave() {
        this.setState({
            isSmallHovered: !this.state.isSmallHovered,
            sizeLabelHovered: '',
        });
    }

    mediumOnMouseOver() {
        this.setState({
            isMediumHovered: !this.state.isMediumHovered,
            sizeLabelHovered: 'M',
        });
    }

    mediumOnMouseLeave() {
        this.setState({
            isMediumHovered: !this.state.isMediumHovered,
            sizeLabelHovered: '',
        });
    }

    largeOnMouseOver() {
        this.setState({
            isLargeHovered: !this.state.isLargeHovered,
            sizeLabelHovered: 'L',
        });
    }

    largeOnMouseLeave() {
        this.setState({
            isLargeHovered: !this.state.isLargeHovered,
            sizeLabelHovered: '',
        });
    }

    addToCartOnMouseOver() {
        this.setState({isCartButtonHovered: !this.state.isCartButtonHovered})
    }

    addToCartOnMouseLeave() {
        this.setState({isCartButtonHovered: !this.state.isCartButtonHovered})
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
            lClickedClass: ''
        });
    }

    mediumOnClick() {
        this.setState({
            isSSelected: false,
            isMSelected: true,
            isLSelected: false,
            sClickedClass: '',
            mClickedClass: 'clicked-size-label',
            lClickedClass: ''
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
        });
    }

    cartButtonOnClick() {
        if(this.state.isSSelected) {
            this.setState({
                numOfSSelected: this.state.numOfSSelected + 1,
                isSSelected: false,
                sClickedClass: '',
            });

        } else if (this.state.isMSelected) {
            this.setState({
                numOfMSelected: this.state.numOfMSelected + 1,
                isMSelected: false,
                mClickedClass: '',
            });

        } else if (this.state.isLSelected) {
            this.setState({
                numOfLSelected: this.state.numOfLSelected + 1,
                isLSelected: false,
                lClickedClass: '',
            });
        }
    }


    render() {
        const small = ['s-size', this.state.sClickedClass];
        const medium = ['m-size', this.state.mClickedClass];
        const large = ['l-size', this.state.lClickedClass];

        const sizeSelectedClass = 'hovered-size-label';
        const sizeLabelSelected =  this.state.sizeLabelHovered;


        const isSmallHovered = this.state.isSmallHovered;
        const mediumOnMouseOver = this.state.isMediumHovered;
        const largeOnMouseOver = this.state.isLargeHovered;

        this.addHoveredClass(isSmallHovered, small, sizeSelectedClass);
        this.addHoveredClass(mediumOnMouseOver, medium, sizeSelectedClass);
        this.addHoveredClass(largeOnMouseOver, large, sizeSelectedClass);


        const cartButtonOnMouseOver = this.state.isCartButtonHovered;
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
                                <span className='size-label'> {sizeLabelSelected} </span>
                            </div>

                            <div className='size-container'>
                                <div className={small.join(' ')}
                                     onMouseOver={this.smallOnMouseOver}
                                     onMouseLeave={this.smallOnMouseLeave}
                                     onClick={this.smallOnClick}
                                >
                                    S
                                </div>

                                <div className={medium.join(' ')}
                                     onMouseOver={this.mediumOnMouseOver}
                                     onMouseLeave={this.mediumOnMouseLeave}
                                     onClick={this.mediumOnClick}
                                >
                                    M
                                </div>

                                <div className={large.join(' ')}
                                     onMouseOver={this.largeOnMouseOver}
                                     onMouseLeave={this.largeOnMouseLeave}
                                     onClick={this.largeOnClick}
                                >
                                    L
                                </div>
                            </div>

                            <div className={cartButtonClass.join(' ')}
                                 onMouseOver={this.addToCartOnMouseOver}
                                 onMouseLeave={this.addToCartOnMouseLeave}
                                 onClick={this.cartButtonOnClick}
                            >
                                Add to cart
                            </div>
                            <div>Number of Small {this.state.numOfSSelected}</div>
                            <div>Number of Medium {this.state.numOfMSelected}</div>
                            <div>Number of Large {this.state.numOfLSelected}</div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProductPage;