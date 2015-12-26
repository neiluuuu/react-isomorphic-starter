/** @jsx React.DOM */

var React = require("react/addons");
var Link = require('react-router').Link;

var Home = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {
        return null;
    },
    render: function () {
        return (
            <div className='container'>
                <h1>Hello World</h1>
                <ul>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        )
    }
});

module.exports = Home;