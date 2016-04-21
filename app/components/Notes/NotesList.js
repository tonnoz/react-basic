import React, { Component } from 'react';

export class NotesList extends Component {
  render() {
    { notes } = this.props; //destructuring this.props: take the notes property into the this.props and save it in a variable called notes
    // so that I can take rid of the this.props into the <ul> and take it further by using the one line arrow function
    return (
      <ul className="list-group">
        {notes.map((note, index) => <li className="list-group-item" key={index} > {note['.value']} </li> )}
      </ul>
    )
  }
}

module.exports = NotesList;