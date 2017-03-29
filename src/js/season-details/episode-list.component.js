import React from 'react';

export default class EpisodeList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderEpisodes() {
        return this.props.episodes.map((episode) => {
            
            return (
                <li className="list-group-item" key={episode.id}>
                    <div className="row">
                        <div className="col-md-2 episode-number"><span
                            className="bold">Episode {episode.episode_number}</span>
                        </div>
                        <div className="col-md-8 episodes-name">
                            <span className="bold">Name:</span> {episode.name}
                        </div>
                        <div className="col-md-2 date">
                            <span className="bold">Air date:</span> {episode.air_date}
                        </div>
                    </div>
                </li>
            );
            
        });
    }

    render() {
        return (
            <div>
                <div className="lead bold">Episodes</div>
                <ul className="list-group">
                    {this.renderEpisodes()}
                </ul>
            </div>
        );
    }
}