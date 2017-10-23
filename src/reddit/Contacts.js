import React from 'react';
import firebase from 'firebase'
import './firebase'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Contact from './Contact'
import '../App.css'

// firebase.database().ref('contactslist').once('value')
//.then((snapshot) => console.log(snapshot.val()))

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contactslist: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const contactslistRef = firebase.database().ref('contactslist');
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    }
    contactslistRef.push(contact);
    this.setState({
      name: '',
      phone: ''
    });
  }

  removeContact(contactId) {
    const contactslistRef = firebase.database().ref(`contactslist/${contactId}`);
    contactslistRef.remove();
  }


  render() {
    return (
      <div className='app'>
      <h1>Contacts list</h1>
      <section className="container">
      <form onSubmit={this.handleSubmit}>
      <input type="text" 
      name="name" 
      placeholder="Whats your name?" 
      onChange={this.handleChange}
      value={this.state.name}
      />
      <input type="text" 
      name="phone" 
      placeholder="Add phone number" 
      onChange={this.handleChange}
      value={this.state.phone}
      />
      <button>Add Contact</button>
      </form>
      </section>
      <section className="display-item">
      <div className="wrapper">
      <ul>
      </ul>
      </div>
      </section>
      <ul>
      {this.state.contactslist.map((contact) => {
        return (
          <li key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <Link to={`/contact/${contact.id}`}>{contact.name} {contact.phone}</Link>
          <button onClick={() => this.removeContact(contact.id)}>Remove Contact</button>
          </li>
        )
      })}</ul>
    </div>

    );
  }
}
export default Contacts;
