import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Landing from './components/landing';
import Home from './components/home';
import RSVPForm from './components/rsvp-form';
import Guestlist from './components/guestlist';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/rsvp-form" component={RSVPForm} />
    <Route path="/guestlist" component={Guestlist} />
  </Route>
);

    // <Route path="/darkmain" component={darkMain} />
