import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/database'

import { DB_CONFIG } from './firebase/db_config'

import Header from './components/Header'
import Main from './components/Main'
import Player from './components/Player'


class App extends Component{
  constructor(props){
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('player');
    this.state = {
      player: [],
      currentPlayers: []
    };
  }

componentWillMount() {
  const currentPlayers = this.state.player;
  this.database.on("child_added", snap => {
    console.log(snap.val());
    currentPlayers.push({
      name: snap.val().name,
      position: snap.val().position,
    });
    this.setState({
      player: currentPlayers,
      currentPlayer: this.currentPlayers
    });
  })
};

  render(){
    return(
      <div>
      <Header />
      <div>
      </div>
      <div>
      </div>
      <Main />
      
      <Player name={this.state.currentPlayers.name}   
      />
    </div>
    )
  }
}

export default App
