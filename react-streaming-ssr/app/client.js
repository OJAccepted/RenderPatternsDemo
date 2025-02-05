import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import OtherApp from './components/otherApp';

ReactDOM.hydrate(<><App /><OtherApp /></>, window.approot);
