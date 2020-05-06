import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Components/Main'
function Home() {
    return (

            <Router>
                <Route path='/' exact component={Main} />
            </Router>

    )
}

export default Home;