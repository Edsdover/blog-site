import React from 'react';
import '../styles/search-bar.css';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      sort: 'decending',
      limit: '10'
    };
  }

  handleSearchTermChange = (searchTerm) => {
    this.setState({ searchTerm: searchTerm })
    this.props.onSearchChange({...this.state, searchTerm: searchTerm });
  };

  handleSortChange = (sort) => {
    this.setState({ sort: sort })
    this.props.onSearchChange({...this.state, sort: sort });
  };

  handleLimitChange = (limit) => {
    this.setState({ limit: limit })
    this.props.onSearchChange({...this.state, limit: limit });
  };

  onNumberChange(number) {
    this.props.onSearchChange(number);
  }

  render() {
    return (
      <div className='searchBar'>
        <form>
          <input className='inputBox' placeholder='Search here for gifs!' name='searchTerm' label="term" onChange={event => this.handleSearchTermChange(event.target.value)} />
          <div className='searchControlsContainer'>
            <select className='sortControl marginRight' name='sortMethod' onChange={event => this.handleSortChange(event.target.value)} disabled = {!this.state.searchTerm}>
              <option label='Sort Decending' value='decending'>recent</option>
              <option label='Sort Ascending' value='ascending'>relevant</option>
            </select>
            <label className="control-label">Display: </label>
            <select className='displayNumberControl' onChange={event => this.handleLimitChange(event.target.value)}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
