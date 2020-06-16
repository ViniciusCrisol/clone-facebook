import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Feed from '../pages/Feed';

import ProfilePosts from '../pages/Profile/posts';
import ProfileInfo from '../pages/Profile/info';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/register' exact component={SignUp} />

      <Route path='/feed' component={Feed} isPrivate />

      <Route path='/profile' exact component={ProfilePosts} isPrivate />
      <Route path='/profile/information' component={ProfileInfo} isPrivate />
      <Route path='/profile/photos' component={ProfilePosts} isPrivate />
      <Route path='/profile/communities' component={ProfilePosts} isPrivate />
    </Switch>
  );
}
