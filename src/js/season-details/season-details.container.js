import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestSeasonDetails } from './season-details.actions';

import EpisodeList from './episode-list.component';

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
        return (
            <div className="container season-details-container">
                <section className="col-md-3 poster-image">
                    {
                        this.props.season.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.season.poster_path}`} className="img-responsive" alt={this.props.season.name}/> :
                            <div className="no-image text-center">
                                <span className="lead">NO IMAGE</span>
                            </div>
                    }
                </section>
                <section className="col-md-9 season-info">
                    <h2>{this.props.season.name} <span className="lead">({this.props.season.air_date})</span></h2>
                    <div className="col-md-12">
                        <div className="lead bold">Overview</div>
                        <p>{this.props.season.overview}</p>
                    </div>
                </section>
                <section className="col-md-12 season-episodes">
                    {this.props.season.episodes ? <EpisodeList episodes={this.props.season.episodes} /> : null }
                </section>
            </div>
        );
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