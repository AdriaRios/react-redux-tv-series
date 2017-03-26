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

    showSeasonDetails(season) {
        console.log(season);
    }

    renderGenres() {
        return this.props.serie.genres.map((gen) => {
            return <span className="gen" key={gen.id}>{gen.name}</span>
        })
    }

    renderSasons() {
        return this.props.serie.seasons.map((season) => {
            if(season.season_number != 0) {
                return (
                    <li className="list-group-item" key={season.id} onClick={() => this.showSeasonDetails(season)}>
                        <div className="row">
                            <div className="col-md-4 season-number"><span className="bold">Season {season.season_number}</span></div>
                            <div className="col-md-4 episodes">
                                <span className="bold">Episodes:</span> {season.episode_count}
                            </div>
                            <div className="col-md-4 date">
                                <span className="bold">Air date:</span> {season.air_date}
                            </div>
                        </div>
                    </li>
                );
            }
        });
    }

    render() {
        return (
            <div className="container serie-details-container">
                <section className="col-md-3 poster-image">
                    {
                        this.props.serie.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.serie.poster_path}`} className="img-responsive" alt="this.props.serie.name"/> :
                            <div className="no-image text-center">
                                <span className="lead">NO IMAGE</span>
                            </div>
                    }
                </section>
                <section className="col-md-9 serie-info">
                    <h2>{this.props.serie.name} <span className="lead">({this.props.serie.first_air_date})</span></h2>
                    <div className="col-md-6 episodes">
                        <div className="col-md-3 bold">Episodes:</div>
                        <div className="col-md-9">{this.props.serie.number_of_episodes}</div>
                    </div>
                    <div className="col-md-6 seasons">
                        <div className="col-md-3 bold">Seasons:</div>
                        <div className="col-md-9">{this.props.serie.number_of_seasons}</div>
                    </div>
                    <div className="col-md-12">
                        <div className="lead bold">Overview</div>
                        <p>{this.props.serie.overview}</p>
                    </div>

                    <div className="col-md-12 genres">
                        <div className="col-md-12 bold">Genres:</div>
                        <div className="col-md-12">{this.props.serie.genres ? this.renderGenres() : ''}</div>
                    </div>
                </section>

                <section className="col-md-12 serie-seasons">
                    <div className="lead bold">Seasons</div>
                    <ul className="list-group">
                        {this.props.serie.seasons ? this.renderSasons() : null}
                    </ul>
                </section>
            </div>
        );
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