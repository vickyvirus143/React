import React from 'react'
class Eventpros extends React.Component{
    age=this.props.age;
    updateage()
    {
       
        console.log("Before age update"+this.age  );
        this.age+=5;
        console.log("After Age Update" + this.age);
    }
    render() 
    {
        return(
        
            <div>
            <h1>{this.props.age}</h1>
            <button onClick={()=>this.updateage()}>Update</button>
            </div>
        )
    }
}
export default Eventpros;