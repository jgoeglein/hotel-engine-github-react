import React from 'react';

export const SORT_OPTIONS = { Relevance: 'score', Stars: 'stars' };

class SortBy extends React.PureComponent {
    constructor(props) {
        super(props);
        const initialSortBy = props.sortBy || SORT_OPTIONS.Relevance;
        this.state = {
            sortBy: initialSortBy,
            sortByLabel: this.getRadioKeyFromValue(initialSortBy)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    getRadioKeyFromValue(value) {
        return Reflect.ownKeys(SORT_OPTIONS).find(key => SORT_OPTIONS[key] === value);
    }

    handleChange(event) {
        this.setState({
            sortBy: event.target.value,
            sortByLabel: this.getRadioKeyFromValue(event.target.value)
        });
        if(this.props.handleChange) {
            this.props.handleChange(event.target.value);
        }
    }

    render() {
        const radios = Reflect.ownKeys(SORT_OPTIONS).map(key => 
            <label key={key}>
                <input type="radio" name="sortOptions" value={SORT_OPTIONS[key]} checked={this.state.sortByLabel === key} onChange={this.handleChange} />
                {key}
            </label>
        );
        return <div className="center-flex">
            <form>
                {radios}
            </form>
        </div>
    }
}

export default SortBy;