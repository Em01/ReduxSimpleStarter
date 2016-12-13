import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBBgawIjznf7BRoZJtEPE6mZ46IwOnq6wE';

// Create a new component. Component should produce some
// HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
