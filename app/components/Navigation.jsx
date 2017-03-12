var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li>
                            <IndexLink to ="/" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to ="/" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="www.janigorse.com" target="_blank">Jani Gorše</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
})
module.exports = Navigation;
