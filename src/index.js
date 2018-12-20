import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Img, Button } from './styled'

// images
import liyoImg from './images/liyo.png'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            run: false
        }
    }
    render() {
        return (
            <Container>
                <Img run={this.state.run} src={liyoImg} />
                <Button
                    onClick={() => {
                        this.setState({
                            run: true
                        })
                    }}
                >
                    Click
                </Button>
            </Container>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
