import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Todo = (props) =>{
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} spacing={1}> 
                <p className={props.completed ? 'text-strike' : null}>{props.text}</p>                
            </Grid>
            <Grid item xs={12} spacing={1}> 
                <Button color="primary" onClick={props.completeTodo}>Complete</Button>
                <Button color="secondary" onClick={props.deleteTodo}>Delete</Button>
            </Grid>
        </Grid>
    );
}

export default Todo;