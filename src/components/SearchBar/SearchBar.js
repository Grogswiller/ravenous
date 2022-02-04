import { render } from '@testing-library/react';
import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li>{sortByOptionValue.key}</li>
        });
    }
}

render() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {renderSortByOptions}    
                </ul>
            </div>
            <div class="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div class="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar;