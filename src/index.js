import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Welcome from './components/02-pages/welcome/welcome';
import Pgallery from './components/02-pages/photo-gallery/photo-gallery';
import Manage from './components/02-pages/manage-services/manage-services';

const routing = (
    <Router basename="/bbc-box-photo-app/ui">
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/gallery" component={Pgallery} />
        <Route path="/manage-services" component={Manage} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));