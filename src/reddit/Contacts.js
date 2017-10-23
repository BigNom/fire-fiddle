import React from 'react';
import firebase from 'firebase'
import './firebase'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Contact from './Contact'

// firebase.database().ref('contactslist').once('value')
//.then((snapshot) => console.log(snapshot.val()))

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contactslist: []
    }
  }

  componentWillMount(){
    let contactslistRef = firebase.database().ref('contactslist');
    let _this = this;
    contactslistRef.on('value', (snapshot) => {
      let contactslist = snapshot.val();
      let newState = [];
      for (let contact in contactslist) {
        newState.push({
          id: contact,
          name: contactslist[contact].name,
          phone: contactslist[contact].phone
        });
      }
  console.log(snapshot.val());
  _this.setState({
    contactslist: newState

  });
    })
  }
  render() {
    return (
      <div className='app'>
      <h1>Contacts list</h1>
      <ul>
      {this.state.contactslist.map((contact) => {
        return (
          <li key={contact.id}>
          <Link to={`/contact/${contact.id}`}>{contact.name} {contact.phone}</Link>
          </li>
        )
      })}</ul>
    </div>

    );
  }
}
export default Contacts;
