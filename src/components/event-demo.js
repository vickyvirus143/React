import React from 'react'
class EventDemo1 extends React.Component {
    
    callEvent() {
        console.log('Am from An Event')
    }
    render() {
        return (
            <button onClick={() => this.callEvent()}>
                Event Click ME</button>
        )
    }
}
export default EventDemo1;