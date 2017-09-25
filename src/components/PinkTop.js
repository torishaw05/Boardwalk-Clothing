import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class  PinkTop  extends Component {
  render() {
    return(
      <div className='shades'>

      <h2 className='faves'> ǷINK TOPPE </h2>
      <div className='cheetahh_glasses'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img className='cheetah_glasses' src={require('../images/tops/top2.jpg')} alt="random image"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='info'>
<h4>ǷINK TOPPE</h4>
<p className='text_info'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat!</p>
<br></br>
<p className='price'> PRICE : $54.OO</p>
<button type='button' className='button'> ADD to Cart</button>
</div>
</div>


      <h3>Size Chart</h3>
      <table>
      <tr>
      <th>SIZE</th>
      <th>BUST</th>
          <th>WAIST</th>
      <th>HIPS</th>
      </tr>
      <tr>
      <td>XS/00-0</td>
      <td>29" - 31"</td>
      <td>23" - 24"</td>
      <td>33" - 34"</td>
      </tr>
      <tr>
      <td>S/2-4</td>
      <td>31" - 32"</td>
      <td>25" - 27"</td>
      <td>34" - 35"</td>
      </tr>
      <tr>
      <td>M/6-8</td>
      <td>32" - 24"</td>
      <td>28" - 29"</td>
      <td>35" - 37"</td>
      </tr>
      <tr>
      <td>L/10-12</td>
      <td>33" - 37"</td>
      <td>29" - 33"</td>
      <td>37" - 41"</td>
      </tr>
      <tr>
      <td>XL/14-16</td>
      <td>37" - 41"</td>
      <td>33" - 35"</td>
      <td>41" - 44"</td>
      </tr>
      <tr>
      <td>XXL/18-20</td>
      <td>42" - 45"</td>
      <td>35" - 38"</td>
      <td>44" - 47"</td>
      </tr>
       </table>
      </div>

    )
  }
}


export default PinkTop;
