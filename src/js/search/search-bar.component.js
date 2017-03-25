import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <section className="search-bar">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" autoFocus="true" placeholder="Search" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchBar;