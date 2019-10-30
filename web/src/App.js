import React from 'react';
import request from 'request';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import SortBy, { SORT_OPTIONS } from './components/SortBy';
import banner from './github_repositories.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      sortBy: SORT_OPTIONS.Relevance
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  render() {
    const searchResults = this.state.searchResults.map((result) => (
      <li key={result.id}>
        <SearchResult result={result}></SearchResult>
      </li>
    ));
    return <div>
      <div className="center-flex">
        <img src={banner} alt="Github repositories"></img>
      </div>
      <SearchBar handleSearch={this.handleSearch}></SearchBar>
      <SortBy handleChange={this.handleSort}></SortBy>
      <div className="center-flex">
        <ul className="search-results-list">
          {searchResults}
        </ul>
      </div>
    </div>
  }

  handleSearch(searchTerm) {
    this.setState({ searchTerm: searchTerm }, this.fetchResults);
  }

  handleSort(sortBy) {
    this.setState({ sortBy: sortBy }, this.fetchResults);
  }

  fetchResults() {
    if (this.state.searchTerm && this.state.searchTerm.length > 0) {
      request.get(`http://localhost:3001/github/repositories?search=${this.state.searchTerm}&sort=${this.state.sortBy}`, (err, res, body) => {
        if (err) {
          console.error(err);
          return;
        }
        this.setState({ searchResults: JSON.parse(body).items });
      });
    }
  }
}

export default App;
