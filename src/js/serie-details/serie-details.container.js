import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestSerieDetails } from './serie-details.actions';

class SerieDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestSerieDetails(this.props.match.params.id);
    }

    render() {
        return <div>{this.props.serie.name}</div>
    }
}

function mapStateToProps(state) {
    return {
        serie: state.serie
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ requestSerieDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailsContainer);