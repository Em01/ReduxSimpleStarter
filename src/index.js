import React from 'react';
import ReactDom from 'react-dom';

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

//take component's generated HTML and put on the page ///(in the DOM).

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
