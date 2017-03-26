import React from 'react';

export default class SerieDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidLoad() {
        console.log(this.props)
    }

    render() {
        return <div>Serie details</div>
    }
}