import React from 'react';

class SerieList extends React.Component {

    constructor(props) {
        super(props);
    }

    showSerieDetails(serie) {
        this.props.onShowSerieDetails(serie.id);
    }

    renderSerieElements() {
        return this.props.series.map((serie) => {

            return (
                <li className="list-group-item" key={serie.id} onClick={() => this.showSerieDetails(serie)}>
                    <div className="row">
                        <div className="col-md-1 ">
                            {
                                serie.poster_path ?
                                    <img src={`https://image.tmdb.org/t/p/w45_and_h67_bestv2${serie.poster_path}`} alt={serie.name}/> :
                                    <div className="no-image text-center"><i className="fa fa-picture-o fa-2x" aria-hidden="true"></i></div>
                            }
                        </div>
                        <div className="col-md-11">
                            <div className="col-md-12 lead">{serie.name}</div>
                            <div className="col-md-12">{serie.first_air_date}</div>
                        </div>

                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <section className="serie-list">
                <ul className="list-group">
                    {this.renderSerieElements()}
                </ul>
            </section>
        );
    }
}

export default SerieList;