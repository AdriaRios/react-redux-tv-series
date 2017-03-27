import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestSeasonDetails } from './season-details.actions';

class SeasonDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let serieId = this.props.match.params.serie_id;
        let season = this.props.match.params.season;
        this.props.requestSeasonDetails(serieId, season);
    }

    render() {
        return <h1>Season details</h1>
    }
}

function mapStateToProps(state) {
    return {
        season: state.season
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ requestSeasonDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SeasonDetailsContainer);