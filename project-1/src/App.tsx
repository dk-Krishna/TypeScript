import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      title: "Krushna",
      isCompleted: false,
      id: "ajsdjadjf",
    },
    {
      title: "Sanket",
      isCompleted: false,
      id: "fdgsdfa",
    },
  ]);

  return (
    <Container maxWidth="sm" sx={{ height: "85vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} />
        ))}
      </Stack>

      <TextField fullWidth label={"New Task"} />

      <Button variant="contained" fullWidth sx={{ margin: "1rem 0" }}>
        ADD
      </Button>
    </Container>
  );
};

export default App;
