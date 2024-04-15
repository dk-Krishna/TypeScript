import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

type PropsType = {
  todo: TodoItemType;
};

const TodoItem = ({ todo }: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}> {todo.title} </Typography>
        <Checkbox />
        <Button
          sx={{
            opacity: 0.5,
            color: "black",
          }}
        >
          <Delete />
        </Button>
        <Button>Edit</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
