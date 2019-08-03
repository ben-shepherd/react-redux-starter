import React from 'react';
import './App.css';

// Redux
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Components
import Routes from './_routes/Routes'

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
