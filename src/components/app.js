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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }


  createNote(title) {
    this.setState({
      notes: this.state.notes.set(title, { title }),

    });
  }
  //
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


  handleSubmit(e) {
    e.preventDefault();
    const item = { text: this.state.text, id: Date.now() };
    this.createNote(item);
    this.setState({ notes: [item, ...this.state.items], text: '' });
  }

  // add(note) {
  //   this.setState({
  //     notes: this.state.notes.set(id, note),
  //   });
  // }

  render() {
    return (
      <div>
        <InputBar handleSubmit={this.createNote} />
        // this note is only showing bc i suck at coding
        <Note title="hello world" text="this is in app.js" onDelete={this.deleteNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note id={id} key={id} note={note} onDelete={(idDelete) => this.deleteNote(idDelete)} />;
        })}
      </div>
    );
  }
}

export default App;
