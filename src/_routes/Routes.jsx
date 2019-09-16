import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

// Routes
import HomepageRoutes from './homepage';

const Routes = () => (
    <Switch>
        <HomepageRoutes />
    </Switch>
);

export default withRouter(Routes);
