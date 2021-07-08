import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import combineReducers from './Reducers/index';
import './index.css';

const state = {
  books: [
    {
      id: Math.random(),
      title: 'Americanah',
      category: 'History',
    },
    {
      id: Math.random(),
      title: 'Javascript',
      category: 'Learning',
    },
    {
      id: Math.random(),
      title: 'My name is life',
      category: 'Biography',
    },
  ],
  filter: 'All',
};

const store = createStore(combineReducers, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
