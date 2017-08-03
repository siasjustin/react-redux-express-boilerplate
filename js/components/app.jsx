import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

/**
 * Gets the browser name or returns an empty string if unknown. 
 * This function also caches the result to provide for any 
 * future calls this function has.
 *
 * @returns {string}
 */



console.log(browser());


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var children = React.Children.map(this.props.children, (child, i) => React.cloneElement(child, { x: this.state.x, y: this.state.y, key: this.props.location.pathname || i }))
        return (
            <div className={"yield browser-" + browser() + " is-mobile-" + globals.isMobile + " is-ios-" + globals.isIos}>
                 {children}
            </div>
        )
    }
};

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;



