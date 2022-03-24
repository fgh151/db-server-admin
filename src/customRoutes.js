import React from 'react';
import { Route } from 'react-router-dom';
import Monitor from './pages/monitor/Monitor';

const routes = [
    <Route exact path="/monitor" component={Monitor} />,
];

export default routes