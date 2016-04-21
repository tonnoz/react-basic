/*destructuring this.props: take the notes property into the this.props and save it in a variable called notes
so that I can take rid of the this.props into the <ul> and take it further by using the one line arrow function*/
import React from 'react'

const NotesList = ({notes}) =>  {
  return (
    <ul className="list-group">
      {notes.map((note, index) => (
        <li className="list-group-item" key={index}>{note}</li>
      ))}
    </ul>
  )
}

export default NotesList