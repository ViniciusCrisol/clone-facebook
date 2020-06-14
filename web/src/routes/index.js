import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/register' exact component={SignUp} />

      <Route path='/feed' component={Feed} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
    </Switch>
  );
}
