import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { loggedIn } from '../../_services/auth.service'

const PrivateRoute = ({ component: Component, ...rest}) => {
    if(loggedIn()) {
        return <Route {...rest} render={props => <Component {...props} />}  />
    }
    else {
        return <Route {...rest} render={props => <Redirect to={"/login"} />} />
    }
}

const mapStateToProps = state => {
    const { auth } = state
    const { loggedIn } = auth

    return {
        loggedIn,
    }
}

const connected = connect(mapStateToProps)(PrivateRoute)

export default connected