import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  Clothing extends Component {
  render() {
    return(
      <div className='home'>
      <center>

      <h2 className='shoes_header'> ©heck Ⓞut Ⓞur TRENDY TⓄǷⓢ !</h2>
      <a href="/BlueTop" target="new">
<img className='red' src={require('../images/tops/top1.jpg')} alt="random image"/></a>

     <a href="/PinkTop" target="new">
 <img className='jean'  src={require('../images/tops/top2.jpg')} alt="random image"/></a>

    <a href="/OrangeTop" target="new">
    <img className='black' src={require('../images/tops/top3.jpg')} alt="random image"/></a>

    <h2 className='shoes_header'> ©heck Ⓞut Ⓞur TRENDY JEANⓢ !</h2>

    <a href="/Clothing" target="new">
<img className='gray' src={require('../images/jeans/jeans_1.jpeg')} alt="random image"/></a>

   <a href="/Clothing" target="new">
<img className='black_heel'  src={require('../images/jeans/jeans_5.jpeg')} alt="random image"/></a>

  <a href="/Clothing" target="new">
  <img className='net' src={require('../images/jeans/jeans_4.jpeg')} alt="random image"/></a>

      </center>
      </div>
    )
  }
}


export default Clothing;
