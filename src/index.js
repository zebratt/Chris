import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import bgMp3 from './sounds/bg.mp3'
import soundMp3 from './sounds/sound.mp3'

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

ReactDOM.render(
    <React.Fragment>
        <App />
        <ReactAudioPlayer ref={ref => (window.rap = ref)} src={bgMp3} autoPlay />
        <ReactAudioPlayer ref={ref => (window.sRap = ref)} src={soundMp3} />
    </React.Fragment>,
    document.getElementById('root')
)
