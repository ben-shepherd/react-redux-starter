import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { loggedIn } from '../../_services/auth.service'

const GuestRoute = ({ component: Component, ...rest}) => {
    if(loggedIn()) {
        return <Route {...rest} render={props => <Redirect to={"/home"} />} />
    }
    else {
        return <Route {...rest} render={props => <Component {...props} />}  />
    }
}

const mapStateToProps = state => {
    const { auth } = state
    const { loggedIn } = auth

    return {
        loggedIn,
    }
}

const connected = connect(mapStateToProps, null, null, {pure: false})(GuestRoute)

export default connected