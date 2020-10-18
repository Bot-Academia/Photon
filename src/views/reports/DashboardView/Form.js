import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        <form >
            <TextField id="outlined-basic" label="Enter Task" variant="outlined" type="text" onChange={this.change} value={this.state.todo.title} />
            <Button variant="contained" color="primary" onClick={this.onSubmit} >
                ADD
            </Button>
        </form>
     );}
    
}

export default Form;