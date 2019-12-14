import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Container/todos'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <main><Todos /></main>
      
    </div>
  );
}

export default App;
