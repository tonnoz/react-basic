import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component{
  mixins: [Router.History],
  getRef: function(ref){
    this.usernameRef = ref;
  },
  handleSubmit: function(){
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, "/profile/" + username)
  },
  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
};

export default SearchGithub;