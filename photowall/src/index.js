import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer';
import App from './Components/App';
// import Main from './Components/Main';


// Create and initialise Redux Store.
// Redux store contains a combined two reducers of comments and posts into a single root reducer.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Render an instance of <Main/> Component that renders all subcomponents.
// Add <BrowserRouter> to keep track of the changes in the urls in the browser.
// Add <Provider> and wrap everything up inside of Provider.
// Render <App/> component as a container component that makes <Main/> connected to the Redux store.
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'));