import React from 'react';

class SearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.props.handleSearch(this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="center-flex">
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
            </div>
            <div className="center-flex">
                <input type="submit" value="Search" />
            </div>
        </form>
    }
}

export default SearchBar;