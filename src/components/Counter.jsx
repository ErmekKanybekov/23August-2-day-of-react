import React from 'react';
class Counter extends React.Component{
    constructor(){
        super()
        this.state= {counter:10} 
    }
    handlerClickUp = () => {
        this.setState({counter:this.state.counter +1}) 
    }
    handlerClickDown = () => {
       this.setState({counter:this.state.counter -1})
        
    }
render (){
    return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handlerClickUp}>ADD 1</button>
            <button onClick={this.handlerClickDown}>REMOVE 1</button>
        </div>
    )
}
}
export default Counter