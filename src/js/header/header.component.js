import React from 'react';

export default class Header extends React.Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">TV Series</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}