import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  CheetahGlasses extends Component {
  render() {
    return(
      <div className='shades'>

      <h2 className='faves'> RAWR! Cheetahprint Shades </h2>
      <div className='cheetahh_glasses'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img className='cheetah_glasses' src={require('../images/sunglasses/cheetah_glasses.jpg')} alt="random image"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='info'>
<h4>RAWR! Cheetahprint Shades</h4>
<p className='text_info'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat!</p>
<br></br>
<p className='price'> PRICE : $15.OO</p>
<button type='button' className='button'> ADD to Cart</button>
</div>
      </div>
      </div>
    )
  }
}


export default CheetahGlasses;
