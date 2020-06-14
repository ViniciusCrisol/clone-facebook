import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Feed} />
      <Route path='/profile' exact component={Profile} />
    </Switch>
  );
}
