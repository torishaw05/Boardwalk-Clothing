import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class  Shoes extends Component {
  render() {
    return(
      <div className='home'>
      <center>
      <h2 className='shoes_header'> ©heck Ⓞut Ⓞur ©ustⓄmer'ⓢ  FAVEⓢ !</h2>
      <a href="https://www.facebook.com/pg/sza/about/" target="new">
<img className='red' src={require('../images/shoes/shoes1.jpg')} alt="random image"/></a>

     <a href="https://www.instagram.com/sza/?hl=en" target="new">
 <img className='jean'  src={require('../images/shoes/shoes2.jpg')} alt="random image"/></a>

    <a href="https://www.etsy.com/market/sza" target="new">
    <img className='black' src={require('../images/shoes/shoes3.jpg')} alt="random image"/></a>

    <a href="https://www.facebook.com/pg/sza/about/" target="new">
<img className='gray' src={require('../images/shoes/shoes4.jpg')} alt="random image"/></a>

   <a href="https://www.instagram.com/sza/?hl=en" target="new">
<img className='black_heel'  src={require('../images/shoes/shoes5.jpg')} alt="random image"/></a>

  <a href="https://www.etsy.com/market/sza" target="new">
  <img className='net' src={require('../images/shoes/shoes6.jpg')} alt="random image"/></a>

      </center>
      </div>
    )
  }
}


export default Shoes;
