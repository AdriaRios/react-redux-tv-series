import React from 'react';

import SearchBar from './search-bar.component';

class SearchContainer extends React.Component {

    constructor() {

    }
    
    render() {
        return (
            <div className="search-container">
                <h1>Search</h1>
                <SearchBar />
            </div>
        );
    }
}

export default SearchContainer;