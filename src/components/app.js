import React, { Component } from 'react';

import Immutable from 'immutable';
import InputBar from '../components/input_bar';
import Note from '../components/note';
import '../style.scss';
import * as firebase from '../firebase';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map(),
    };

    firebase.onNotesChanged((newNotes) => {
      this.setState({ notes: Immutable.Map(newNotes) });
    });

    this.onChange = this.onChange.bind(this);
    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    // this.callback = this.callback.bind(this);
  }


  // componentDidMount( this.callback() ) {
  //
  //   // actual function
  //
  // }


  onChange(e) {
    this.setState({ text: e.target.value });
  }

  // callback(snapshot) {
  //   this.notes.setState({ note: snapshot.val() });
  // }


// update these three functions to call the associated function in firebase
  createNote(title) {
    firebase.createnote({ title, text: '', x: 0, y: 0, zindex: 1 });
    // this.setState({
    //   notes: this.state.notes.set(title, { title, text: '', x: 0, y: 0, zindex: 1 }),
    // });
  }

  deleteNote(id) {
    firebase.deletenote(id);
    // this.setState({
    //   notes: this.state.notes.delete(id),
    // });
  }

  updateNote(id, fields) {
    firebase.updatenote(id, fields);
    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // });
  }


  render() {
    return (
      <div className="cover">
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
