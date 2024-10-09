import React, { Component } from 'react'

export class App extends Component {
    constructor() {
      super()
    
      this.state = {
         background: '',
         color: ''
      }
    }

    changeState() {
        if (this.state.background === 'black' && this.state.color === 'white') {
            this.setState({
                background: '',
                color: ''
            })
        } else {
            this.setState({
                background: 'black',
                color: 'white'
            })
        }
    }

    render() {
        return (
            <div style={{ background: this.state.background, color: this.state.color }}>
                <button onClick={() => this.changeState()}>Click me..!</button>
            </div>
        )
    }
}

export default App