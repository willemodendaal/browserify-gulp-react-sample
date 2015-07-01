/**
 * Created by willem on 7/1/15.
 */
var math = require('./lib/math');
var React = require('react');

var MainView = React.createClass({
    render() {
        "use strict";

        return (
            <div>MAINDIV</div>
        );
    }
});

React.render(<MainView/>, document.querySelector('.content'));