import firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA7VJOHR4y7kGI1n7yP8iHKLDeHJVJVH7A',
  authDomain: 'sydni-sticky-notes.firebaseapp.com',
  databaseURL: 'https://sydni-sticky-notes.firebaseio.com',
  storageBucket: 'sydni-sticky-notes.appspot.com',
};


firebase.initializeApp(config);


// Get a reference to the database service
// const database = firebase.database();
export function deletenote(id) {
  firebase.database().ref('notes').child(id).
  remove();
}
// when something changes, take a snapshot of the state- snapshot.val() is everything


export function onNotesChanged(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function updatenote(id, fields) {
  firebase.database().ref('notes').child(id).
  update(fields);
}

export function createnote(notes) {
  firebase.database().ref('notes').push(notes);
}
