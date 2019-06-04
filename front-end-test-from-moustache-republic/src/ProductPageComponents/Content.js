import React from 'react';
 class Content extends React.Component {
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

         this.addClass = this.addClass.bind(this);

         this.state = {
             smallOnMouseOver: false,
             mediumOnMouseOver: false,
             largeOnMouseOver: false,
             sizeLabelSelected: '',
             cartButtonOnMouseOver: false
         };


     }

     smallOnMouseOver() {
         this.setState({smallOnMouseOver: !this.state.smallOnMouseOver})
     }

     smallOnMouseLeave() {
         this.setState({smallOnMouseOver: !this.state.smallOnMouseOver})
     }

     mediumOnMouseOver() {
         this.setState({mediumOnMouseOver: !this.state.mediumOnMouseOver})
     }

     mediumOnMouseLeave() {
         this.setState({mediumOnMouseOver: !this.state.mediumOnMouseOver})
     }

     largeOnMouseOver() {
         this.setState({largeOnMouseOver: !this.state.largeOnMouseOver})
     }

     largeOnMouseLeave() {
         this.setState({largeOnMouseOver: !this.state.largeOnMouseOver})
     }


     addToCartOnMouseOver() {
         this.setState({cartButtonOnMouseOver: !this.state.cartButtonOnMouseOver})
     }

     addToCartOnMouseLeave() {
         this.setState({cartButtonOnMouseOver: !this.state.cartButtonOnMouseOver})
     }

     addClass (thingOnMouseOver, arrayClass, className, sizeLabelSelected) {
         if(thingOnMouseOver) {
             arrayClass.push(className);
             this.state.sizeLabelSelected = sizeLabelSelected;

         } else {
             arrayClass[1] = '';
         }
     }

     render() {

         const small = ['s-size'];
         const medium = ['m-size'];
         const large = ['l-size'];

         const sizeSelectedClass = 'hovered-size-label';
         const sizeLabelSelected =  this.state.sizeLabelSelected;

         const smallOnMouseOver = this.state.smallOnMouseOver;
         const mediumOnMouseOver = this.state.mediumOnMouseOver;
         const largeOnMouseOver = this.state.largeOnMouseOver;

         this.addClass(smallOnMouseOver, small, sizeSelectedClass, 'S');
         this.addClass(mediumOnMouseOver, medium, sizeSelectedClass, 'M');
         this.addClass(largeOnMouseOver, large, sizeSelectedClass, 'L');


         const cartButtonOnMouseOver = this.state.cartButtonOnMouseOver;
         const cartButtonClass = ['add-to-cart'];

         if(cartButtonOnMouseOver) {
             cartButtonClass.push('hovered-add-to-cart');

         } else {
             cartButtonClass[1] = '';
         }


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
                         &nbsp;
                         <span className='size-label'> {sizeLabelSelected} </span>
                     </div>

                     <div className='size-container'>
                         <div className={small.join(' ')} name = 'smallOnMouseOver'
                              onMouseOver={this.smallOnMouseOver}
                              onMouseLeave={this.smallOnMouseLeave} >
                             S
                         </div>

                         <div className={medium.join(' ')}
                              onMouseOver={this.mediumOnMouseOver}
                              onMouseLeave={this.mediumOnMouseLeave} >
                             M
                         </div>

                         <div className={large.join(' ')}
                              onMouseOver={this.largeOnMouseOver}
                              onMouseLeave={this.largeOnMouseLeave}>
                             L
                         </div>
                     </div>

                     <div className={cartButtonClass.join(' ')}
                          onMouseOver={this.addToCartOnMouseOver}
                          onMouseLeave={this.addToCartOnMouseLeave} >
                         Add to cart
                     </div>

                 </div>
             </div>
         );
     }
}

export default Content;