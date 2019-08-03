import React from 'react'
import Homepage from './components/homepage/index'
import { Route, withRouter, Switch } from 'react-router-dom'
import GuestRoute from './GuestRoute'
import PrivateRoute from './PrivateRoute'

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        )
    }
}

export default withRouter(Routes)