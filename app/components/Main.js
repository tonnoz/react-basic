import React from 'react'
import SearchGithub from './SearchGithub'


const Main = React.createClass({
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}} >
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});


module.exports = Main;