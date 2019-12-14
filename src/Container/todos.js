import React, {Component} from 'react';
import Todo from '../Components/todo';
import TextField from '@material-ui/core/TextField';

class Todos extends Component{
    constructor(props){
        super(props);

        this.state ={
            term: '',
            items :[
                {
                    id: 1,
                    text: 'Understanding "let" and "const"',
                    completed: false,
                    deleted: false
                },
                {
                    id: 2,
                    text: 'Understanding the Folder Structure',
                    completed: false,
                    deleted: false
                },
                {
                    id: 3,
                    text: 'Working with Components & Re-Using Them',
                    completed: false,
                    deleted: false
                },
                {
                    id: 4,
                    text: 'Using the useState() Hook for State Manipulation',
                    completed: false,
                    deleted: false
                }
            ]
        };
    }

    changeHandler = event => {
        this.setState({term: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        let termObj = {id: this.state.items.length+1, text: this.state.term, deleted: false, completed: false};
        this.setState({
            term: '',
            items: [...this.state.items, termObj]
        });
    }

    completeTodoHandler = (event, id) => {
        const newTodoItems = [...this.state.items];

        let updatedTodo = newTodoItems.map( todo => {
            if(todo.id === id)
                todo.completed = true;
            return todo;
        });

        this.setState({ items: [...updatedTodo] });
    }

    
    deleteTodoHandler = (event, id) => {
        const newTodoItems = [...this.state.items];

        let deletedTodo = newTodoItems.map( todo => {
            if(todo.id === id)
                todo.deleted = true;
            return todo;
        });

        this.setState({ items: [...deletedTodo] });
    }

    render() {
        let todoList = this.state.items;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <TextField value={this.state.term} onChange={this.changeHandler} helperText="Press Enter to Save" /> 
                </form>
                {
                    todoList.map((item, index) =>
                        (item.deleted === true) ? '' :
                            <Todo key={index} 
                                text={item.text} 
                                completed={item.completed} 
                                deleted={item.deleted}
                                completeTodo = {(event) => this.completeTodoHandler(event, item.id)}
                                deleteTodo = {(event) => this.deleteTodoHandler(event, item.id)} 
                            />
                        
                    )
                }
            </div>
        );
    }
}

export default Todos;