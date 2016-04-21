import React from 'react'
import NotesList from './NotesList'
import AddNote   from './AddNote'

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});

module.exports = Notes;