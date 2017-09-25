import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch}  from 'react-router-dom';

import Shoes from './components/Shoes.js'
import Clothing from './components/Clothing.js';
import BaseLayout from './components/BaseLayout.js';
import Store from './components/Store.js';
import Accessories from './components/Accessories.js';
import CheetahGlasses from './components/CheetahGlasses';
import RedGlasses from './components/RedGlasses';
import WhiteGlasses from './components/WhiteGlasses';
import BlueTop from './components/BlueTop';
import OrangeTop from './components/OrangeTop';
import PinkTop from './components/PinkTop';

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>

    <Route path='/pinktop' component={PinkTop} />
    <Route path='/bluetop' component={BlueTop} />
    <Route path='/orangetop' component={OrangeTop} />
    <Route path='/accessories' component={Accessories} />
    <Route path='/cheetahglasses' component={CheetahGlasses} />
    <Route path='/whiteglasses' component={WhiteGlasses} />
    <Route path='/redglasses' component={RedGlasses} />
    <Route path='/clothing' component={Clothing} />
    <Route path='/shoes' component={Shoes} />
    <Route path='/' component={Store} />

    </Switch>
 </BaseLayout>
</BrowserRouter>
  ,
  document.getElementById('root')
);


registerServiceWorker();
