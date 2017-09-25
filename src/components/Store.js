import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  Store extends Component {
  render() {
    return(

      <div className='home'>
      <script src="/lib/w3.js"></script>
      <center>
      <div className='juice'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  </div>



<div className='photos'>
      <img className='access' src={require('../images/access.jpg')}/>

      &nbsp;      &nbsp;      &nbsp;

      <img className='beauty' src={require('../images/beauty.jpg')}/>

      &nbsp;      &nbsp;      &nbsp;

      <img className='jackets' src={require('../images/jackets.jpg')}/>

      &nbsp;      &nbsp;      &nbsp;

      <img className='rompers' src={require('../images/rompers.jpg')}/>

</div>
<footer>Copyright © 2017 Boardwalk</footer>








      <script>
      w3.slideshow(".nature");
</script>
      </center>
      </div>
    )
  }
}


export default Store;
