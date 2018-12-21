import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import One from './One'
import two from './Two'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={One} />
                    <Route exact path="/two" component={two} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
