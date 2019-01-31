import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//
// import NestedGrid from './grid'
// import SimpleExpansionPanel from './imagGrid'
import AppRouter from './router'



// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SimpleExpansionPanel />, document.getElementById('root'));
// ReactDOM.render(<NestedGrid />, document.getElementById('root'));

ReactDOM.render(<AppRouter />, document.getElementById('root'));
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
