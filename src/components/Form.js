import React, { Component } from 'react'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Firstname: '',
            Lastname: '',
            Topic: 'Angular'
        }
    }
    handleSubmit = (event) => {
        console.log(this.state.Firstname);
    }
    handlChangeFirstname = (event) => {
        this.setState({
            Firstname: event.target.value
        })
    }
    handlChangeLastname = (event) => {
        this.setState({
            Lastname: event.target.value
        })
    }
    handlChangeTopic = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.Firstname}
        ${this.state.Lastname}
        ${this.state.Topic}`)
        console.log(this.state.Firstname);
        console.log(this.state.Lastname);
        console.log(this.state.Topic);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>I Am From Form</h1>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Firstname</label>
                        <input type="text" value={this.state.Firstname}
                            onChange={this.handlChangeFirstname} />
                    </div>
                    <div>
                        <label>Lastname</label>
                        <input type="text" value={this.state.Lastname}
                            onChange={this.handlChangeLastname} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.Topic}
                            onChange={this.handlChangeTopic}>
                            <option value="Angular">Angular</option>
                            <option value="Node" >Node</option>
                            <option value="React">React</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}
export default Form;