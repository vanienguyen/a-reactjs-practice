import React from 'react';
 class Content extends React.Component {
     constructor(props) {
         super(props);

         this.smallHovered = this.smallHovered.bind(this);
         this.mediumHovered = this.mediumHovered.bind(this);
         this.largeHovered = this.largeHovered.bind(this);

         this.state = {sizeSelected: 0};


     }

     smallHovered() {
         this.setState({sizeSelected: 1})
     }

     mediumHovered() {
         this.setState({sizeSelected: 2})
     }

     largeHovered() {
         this.setState({sizeSelected: 3})
     }



     render() {
         const sizeSelected = this.state.sizeSelected;

         const small = ['s-size'];
         const medium = ['m-size'];
         const large = ['l-size'];

         const sizeSelectedClass = 'hovered-size-label';

         let sizeLabelSelected;

         if(sizeSelected === 1) {
             small.push(sizeSelectedClass);
             sizeLabelSelected = 'S';

         } else if(sizeSelected === 2) {
             medium.push(sizeSelectedClass);
             sizeLabelSelected = 'M';

         } else if(sizeSelected === 3) {
             large.push(sizeSelectedClass);
             sizeLabelSelected = 'L';

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
                         <div className={small.join(' ')} onClick={this.smallHovered}> S </div>
                         <div className={medium.join(' ')} onClick={this.mediumHovered}> M </div>
                         <div className={large.join(' ')} onClick={this.largeHovered}> L </div>
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