import React, { Component } from 'react';

export class NotesList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.notes.map(function(note, index){
            return <li className="list-group-item" key={index} > {note['.value']} </li>
          })
        }
      </ul>
    )
  }
}

module.exports = NotesList;