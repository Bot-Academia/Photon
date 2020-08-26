import React , { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Form from './Form';
import Cards from './Cards';
import {
  // Avatar,
  // Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

// todo starts here *************************************************************

class ToDo extends Component {
  state={
    todos:[]
  }

  componentDidMount(){
    if(localStorage.getItem('todos'))
    {this.setState({todos:JSON.parse(localStorage.getItem('todos'))},()=>{this.remaining();})
  }
    
  }

  addtodo= (todo)=>{
    this.setState({ todos: [...this.state.todos,{'title':todo.title,'done':todo.done}] },()=>{this.remaining()
    
      const parsed = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', parsed);

    })
  }

  changedone=(item) => {
    this.setState({ todos: this.state.todos.map((todo,index) => {
      if(index === item){
        todo.done = !todo.done
      }
      return todo;
    })});
    this.remaining();
    const parsed = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', parsed);
  }

  remaining=()=>{
    let value = 0;
    this.state.todos.map((todo)=>{
        if(todo.done===false)
        { value++;}
      return 0;
    });
    this.setState({count:value})
  }

  remove=(index)=>{
    this.setState({todos: [...this.state.todos.filter((todo,i) => i !== index)]},()=>{this.remaining()
    
      const parsed = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', parsed);
    
    })
  }


  render(){
    return (
      <Card
        // className={clsx(classes.root)}
        // {...rest}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
              >
                TASKS LIST
              </Typography>
  
              <Grid item>
                <Typography><Form addtodo={this.addtodo}/></Typography>
              </Grid>
              <Grid item>
              <Cards todos={this.state.todos} changedone={this.changedone} remove={this.remove}/>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };
}

ToDo.propTypes = {
  className: PropTypes.string
};

export default ToDo;

const liststyle={
  width: '30rem'
}
