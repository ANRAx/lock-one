import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Card from './Card';
import Footer from './Footer';
import Stopwatch from './Stopwatch';
// import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(

  <div>
    <div>
      <Header />
    </div>

    <div className="flex">
      <div className="fl w-third">
        {/* Dashboard */}
      </div>
      <div className="tc pt7 fl w-third pa2">
        <Card />
      </div>
      <div className="fl w-third">
        <Stopwatch />
      </div>
    </div>

    <div>
      <Footer />
    </div>
  </div>
  ,document.getElementById('root')
);

serviceWorker.unregister();
