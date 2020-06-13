import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from '../pages/feed';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Feed} />
    </Switch>
  );
}
