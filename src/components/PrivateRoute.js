import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(compProps) => {
                if (localStorage.getItem('token')) {
                    return <Component {...compProps} />
                }
                else {
                    return <Redirect to="/" />
                }
            }
            }
        />
    )
}

export default PrivateRoute;






//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in