// A simple, clean UI toDo list Web App

import React, { useState } from "react";
import Welcome from "./Welcome";
import CardToDo from "./CardToDo";
import { TextField, Container, Grid, Button } from "@material-ui/core";

const App = () => {
  const [todo, setTodo] = useState(["hi"]);
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const updateTodo = e => {
    e.preventDefault();
    setTodo([...todo, input]);
    console.log(todo);
    console.log(input);
    setInput("");
  };

  const removeTodo = name => {
    setTodo(todo.filter(el => el !== name));
  };

  let toDoList = todo.map(todo => (
    <CardToDo key={todo + 1} toDo={todo} removeTodo={removeTodo} />
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
              style={{ marginBottom: 10, display: "flex" }}
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
              <Button onClick={() => setTodo([])}>Delete all</Button>
            </form>
          </Grid>
          {toDoList}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
