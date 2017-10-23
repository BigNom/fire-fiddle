import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './reddit/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import './reddit/firebase'

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
