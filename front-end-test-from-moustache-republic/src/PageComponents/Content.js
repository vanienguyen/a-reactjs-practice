import React from 'react';
 class Content extends React.Component {
     constructor(props) {
         super(props);

         this.smallSelect = this.smallSelect.bind(this);
         this.mediumSelect = this.mediumSelect.bind(this);
         this.largeSelect = this.largeSelect.bind(this);

         this.state = {sizeSelected: 0};


     }

     smallSelect() {
         this.setState({sizeSelected: 1})
     }

     mediumSelect() {
         this.setState({sizeSelected: 2})
     }

     largeSelect() {
         this.setState({sizeSelected: 3})
     }



     render() {
         const sizeSelected = this.state.sizeSelected;
         const small = ['s-size'];
         const medium = ['m-size'];
         const large = ['l-size'];

         if(sizeSelected === 1) {
             small.push('size-selected');

         } else if(sizeSelected === 2) {
             medium.push('size-selected');

         } else if(sizeSelected === 3) {
             large.push('size-selected');

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
                         <span className='size-label'> S </span>
                     </div>

                     <div className='size-container'>
                         <div className={small.join(' ')} onClick={this.smallSelect}> S </div>
                         <div className={medium.join(' ')} onClick={this.mediumSelect}> M </div>
                         <div className={large.join(' ')} onClick={this.largeSelect}> L </div>
                     </div>

                     <div className='add-to-cart'>
                         Add to cart
                     </div>

                 </div>
             </div>
         );
     }
}

export default Content;