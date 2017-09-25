import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  WhiteGlasses extends Component {
  render() {
    return(
      <div className='whitee_glasses'>

      <h2 className='faves'>BUNDLES of SNOW Glasses </h2>
      <div className='cheetahh_glasses'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img className='cheetah_glasses' src={require('../images/sunglasses/white_glasses.jpg')} alt="random image"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='info'>
<h4>BUNDLES of SNOW Glasses</h4>
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


export default WhiteGlasses;
