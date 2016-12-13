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
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
