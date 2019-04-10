import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Cardlist from './Cardlist';
import {robots} from './robots';
ReactDOM.render( <Cardlist robots={robots}/>, document.getElementById('root'));

// unregister() to register() 
serviceWorker.register();
