import React from 'react';

export default class SeasonList extends React.Component {

    constructor(props) {
        super(props);
    }

    showSeasonDetails(season) {
        console.log(season);
    }

    renderSeasons() {
        return this.props.seasons.map((season) => {
            if (season.season_number != 0) {
                return (
                    <li className="list-group-item" key={season.id} onClick={() => this.showSeasonDetails(season)}>
                        <div className="row">
                            <div className="col-md-4 season-number"><span
                                className="bold">Season {season.season_number}</span></div>
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
            <div>
                <div className="lead bold">Seasons</div>
                <ul className="list-group">
                    {this.renderSeasons()}
                </ul>
            </div>
        );
    }
}