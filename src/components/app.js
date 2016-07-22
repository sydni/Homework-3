import React, { Component } from 'react';

// import Welcome from './welcome';
import Immutable from 'immutable';
import InputBar from '../components/input_bar';
import Note from '../components/note';
import '../style.scss';


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),

    };
    this.onChange = this.onChange.bind(this);
    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }


  createNote(title) {
    this.setState({
      notes: this.state.notes.set(title, { title, text: '', x: 0, y: 0, zindex: 1 }),
    });
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  updateNote(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }


  render() {
    return (
      <div>
        <InputBar createNote={this.createNote} />
        <div className="noteContainer">
          {this.state.notes.entrySeq().map(([id, note]) => {
            return <Note id={id} key={id} note={note} deleteNote={(idDelete) => this.deleteNote(idDelete)} updateNote={(idUpdate, updatedText) => this.updateNote(idUpdate, updatedText)} />;
          })}
        </div>
      </div>
    );
  }
}


export default App;
