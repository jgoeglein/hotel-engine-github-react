import React from 'react';
import './SearchResult.css';

class SearchResult extends React.PureComponent {

    render() {
        return <div className="search-result">
            <h3>
                <a href={this.props.result.html_url}>{this.props.result.name}</a> by {this.props.result.owner.login}
            </h3>
            <div className="description">{this.props.result.description}</div>
            <div className="language">Language: {this.props.result.language || 'Not specified'}</div>
            <div className="stars">{this.props.result.stargazers_count} stars</div>
        </div>
    }
}

export default SearchResult;