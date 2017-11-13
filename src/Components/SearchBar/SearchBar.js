import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term); 
    console.log(this.state.term);
  }

  handleTermChange(evt) {
    this.setState({
      term: evt.target.value,
    })

  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
          onChange={this.handleTermChange}
        />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;