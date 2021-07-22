import LandingPage from 'pages/LandingPage';
import { firebase } from '../firebase/firebaseConfig'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import App from './App';
import { useDispatch } from 'react-redux';
import { login } from 'actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import '../components/onda.css'


// import { LoginScreen } from '../components/login/LoginScreen';
// import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setchecking] = useState(true)
    const [isLoggedIn, setisLoggedIn] = useState(false)


    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setisLoggedIn(true)
            } else {
                setisLoggedIn(false)
            }
            setchecking(false)
        })

    }, [dispatch, setchecking, setisLoggedIn])


    if (checking) {
        return (
            <div className="preloader">
            <img src="https://i.imgur.com/cWGLRFJ.png" alt=""/>
          </div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        exact path="/auditas"
                        component={LandingPage}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={App}
                    />
                </Switch>
            </div>
        </Router>
    )
}
