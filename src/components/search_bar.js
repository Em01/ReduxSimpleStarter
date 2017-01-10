import React from 'react';

/* functional component
const searchBar = () => {
  return <input />;
};
*/

//Class component

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
