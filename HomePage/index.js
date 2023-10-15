import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home'

const HomePage = ({ startQuiz }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <Home startQuiz={startQuiz} />} />
            </Switch>
        </Router>
    )
}

HomePage.propTypes = {
    startQuiz: PropTypes.func.isRequired,
}

export default HomePage