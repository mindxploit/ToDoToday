// A simple, clean UI toDo list Web App

import React from "react";
import Welcome from "./Welcome";
import CardToDo from "./CardToDo";
import { TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };
  }

  componentDidUpdate() {}

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  updateTodo = e => {
    e.preventDefault();
    let todo = this.state.input;
    this.setState({
      todos: [...this.state.todos, todo],
      input: ""
    });
  };

  // Method to remove Todo item
  removeToDo = name => {
    this.setState({
      todos: this.state.todos.filter(el => el !== name)
    });
  };

  render() {
    let toDoList = this.state.todos.map(todo => {
      return (
        <CardToDo
          onClick={() => this.removeToDo(todo)}
          key={todo + 1}
          toDo={todo}
        />
      );
    });

    return (
      <div>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            alignItems="center"
            alignContent="center"
            spacing={3}
          >
            <Grid item>
              <Welcome />
            </Grid>
            <Grid item>
              <form style={{ marginBottom: 10 }} onSubmit={this.updateTodo}>
                <TextField
                  label="Todo"
                  id="outlined-basic"
                  onChange={this.handleChange}
                  value={this.state.input}
                  variant="outlined"
                  type="text"
                />
              </form>
            </Grid>
            {toDoList}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
