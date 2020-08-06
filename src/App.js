// A simple, clean UI toDo list Web App

import React, { useState } from "react";
import Welcome from "./Welcome";
import CardToDo from "./CardToDo";
import { TextField, Container, Grid, Button, Typography } from "@material-ui/core";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState();
  const [error, setError] = useState(false);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const updateTodo = e => {
    e.preventDefault();
    if (!input) {
      setError(true)
    } else {
      setError(false)
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const removeTodo = name => {
    setTodo(todo.filter(el => el !== name));
  };

  let toDoList = todo.map(todo => (
    <Grid item>
      <CardToDo key={todo + Math.floor(Math.random() * 100)} toDo={todo} removeTodo={removeTodo} />
    </Grid>
  ));

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
            <form
              style={{
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                justify: "center"
              }}
              onSubmit={updateTodo}
            >
              <TextField
                label="Todo"
                id="outlined-basic"
                onChange={handleChange}
                value={input}
                variant="outlined"
                type="text"
              />
              <Button style={{ margin: 10 }} onClick={() => setTodo([])}>
                Delete all
              </Button>
            </form>
          </Grid>
          {error && <Typography  style={{ marginBottom: 15 }} variant="body2" color="textSecondary">Please enter a valid todo</Typography>}
          {toDoList}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
