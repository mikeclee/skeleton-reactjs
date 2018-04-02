/**
 *  ./client/index.js
 *  the webpack entry file
 **/
console.log('Hey dare!!')
console.log('Starting React-ion')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));