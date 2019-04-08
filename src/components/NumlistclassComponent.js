import React from 'react'
class NumlistclassComponent extends React.Component {
    render() {

        return (
            <ul>

                {this.props.numbers.map((n) =>
                    <li>{n}</li>)}

            </ul>
        )
    }
}
export default NumlistclassComponent;