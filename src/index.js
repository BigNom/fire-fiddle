import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './reddit/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import './reddit/firebase'

let contacts = [
  {
    id: '1',
    name: 'Simon',
    phone: '555 555 5555'
  },
  {
    id: '2',
    name: 'Tiger',
    phone: '555 555 5555'
  },
  {
    id: '3',
    name: 'Charlie',
    phone: '555 555 5555'
  }
]


ReactDOM.render(
  <Router>
    <App contacts={contacts}/>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
