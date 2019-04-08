import React, { Component } from 'react'
export class Welcome extends Component {
    render() {
        
            let message = "";
            if (true) {
                message = "Hello Friends";
            }
            return (
            <div>
            <h1>Hello From Welcome Component</h1>
            <p>{2+2}</p>
            <p>{message}</p>
            <button class="btn btn-success">Hello</button>
            </div>
        )
    }
}
export default Welcome;