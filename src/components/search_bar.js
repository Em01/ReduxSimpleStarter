import React from 'react';

/* functional component
const searchBar = () => {
  return <input />;
};
*/

//Class component

class SearchBar extends React.Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
