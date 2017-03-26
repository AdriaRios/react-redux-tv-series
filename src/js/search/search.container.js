import _ from 'lodash';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from './search-bar.component';
import SerieList from './serie-list.component';

import { requestSearch } from './search.actions';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.showSerieDetails = this.showSerieDetails.bind(this);
    }

    searchSeries(term) {
        this.props.requestSearch(term);
    }

    showSerieDetails(serie_id) {
        this.props.history.push(`/serie/${serie_id}`);
    }

    render() {

        const searchSeries = _.debounce((term) => { this.searchSeries(term) }, 300);

        return (
            <div className="container search-container">

                <SearchBar onSearchTermChange={searchSeries}/>
                <SerieList series={this.props.series} onShowSerieDetails={this.showSerieDetails}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        series: state.series
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ requestSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);