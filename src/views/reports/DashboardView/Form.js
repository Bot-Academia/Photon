import React, { Component } from 'react';

class Form extends Component{
    state={
        todo:{
        title: '',
        done: false}
    }

    change = (e)=> {
        let value=e.target.value
        this.setState(prevState => {
        let todo = Object.assign({}, prevState.todo);  
        todo.title = value; 
        todo.done= false;                               
        return { todo };                                 
      })}
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state.todo);
        this.setState(prevState => {
            let todo = Object.assign({}, prevState.todo);  
            todo.title = ''; 
            todo.done= false;                               
            return { todo };                                 
          })
    }

    render(){
    return(
        <div>
            <input type="text" placeholder='Enter Task' onChange={this.change} value={this.state.todo.title} style={inputstyle}></input>
            <input type='submit' onClick={this.onSubmit} value='Add' style={btn}></input>
        </div>
    );}
    
}

const inputstyle={
    height: '40px',
    width: '200px',
    textAlign: 'center'
}

const btn={
    height: '40px',
    width: '80px',
    backgroundColor: '#0398fc',
    borderRadius: '10px',
    marginLeft: '10px',
    borderColor : '#0398fc',
    color: 'white'
}

export default Form;