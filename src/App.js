import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './styles/index.sass';
import {GreetingForm} from './modules/GreetingForm';
import {HomeScreen} from './modules/HomeScreen';

class App extends Component {
  render () {
    return (
      <div className="app-wrapper">
        {/* <Route 
          exact path='/' component={GreetingForm} />  */}
        <Route exact path='/' component={HomeScreen} />
      </div>
    );
  };
}

export default App;