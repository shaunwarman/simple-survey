import React from 'react';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Admin from './admin';
import AddQuestion from './addQuestion';
import Login from './login';
import Questions from './questions';
import Vote from './vote';
import Unauthorized from './unauthorized';

render(
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/question/add" component={AddQuestion} />
        <Route path="/question/view" component={Questions} />
        <Route path="/question/viewall" component={Questions} />
        <Route path="/vote" component={Vote} />
        <Route path="/unauthorized" component={Unauthorized} />
    </Router>, document.getElementById('content')
);