import React from 'react';

class SerieList extends React.Component {

    constructor(props) {
        super(props);
    }

    showSerieDetails(serie) {
        console.log(serie);
    }

    renderSerieElements() {
        return this.props.series.map((serie) => {

            return (
                <li className="list-group-item" key={serie.id} onClick={ () => {this.showSerieDetails(serie)}}>
                    <div className="row">
                        <div className="col-md-6 text-left">{serie.name}</div>
                        <div className="col-md-6 text-right">{serie.first_air_date}</div>
                    </div>
                </li>
            )
        })
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