import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Sound from 'react-sound';




class  BaseLayout extends Component {
  render() {
    return(
      <div className='App'>
      <div className='body'>
      <center>
      <h1 className='sza_h1'>
  &nbsp;
  <br></br>
  &nbsp;
  <br></br>
  &nbsp;
  <br></br>


       </h1>
       </center>

       <center>
      <nav>
      <center>

      &nbsp;

      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;

    <NavLink className='text_nav' to='/'> ⓈT0RE  </NavLink>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;



    <NavLink className='text_nav' to='/Clothing'> ⒸL0THING  </NavLink>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;



  <NavLink className='text_nav' to='/Shoes'> ⓈHOEƨ </NavLink>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <NavLink className='text_nav' to='/Accessories'> ẠⓒCESS0RIEƨ </NavLink>
</center>
      </nav>
</center>
      </div>
      {this.props.children}
      </div>
    )
  }
}



export default BaseLayout;
