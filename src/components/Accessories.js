import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  Accessories extends Component {
  render() {
    return(
      <div className='home'>
      <center>
      <h4 className='faves'> CustⓄmer F@VES! </h4>
      <a href="/CheetahGlasses" target="new">
<img className='cheetah_glasses' src={require('../images/sunglasses/cheetah_glasses.jpg')} alt="random image"/></a>

     <a href="/RedGlasses" target="new">
 <img className='red_glasses'  src={require('../images/sunglasses/red_glasses.jpg')} alt="random image"/></a>

    <a href="/WhiteGlasses" target="new">
    <img className='white_glasses' src={require('../images/sunglasses/white_glasses.jpg')} alt="random image"/></a>

      </center>
      </div>
    )
  }
}


export default Accessories;
