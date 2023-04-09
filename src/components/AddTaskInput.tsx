import { useState } from "react"
import {
  addTask
} from "../redux/tasksSlice"
import { useAppDispatch } from "@/redux/hooks";
import { Button, TextField } from "@mui/material";
import styles from "../styles/Home.module.css";

export function AddTaskInput() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): undefined {
    e.preventDefault();
    if(!newTask.trim()) return;
    dispatch(addTask(newTask));
    return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task"
        variant="outlined"
        size="small"
        value={newTask}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
      ></TextField>
      <Button variant="contained" component="label" size="medium" className={styles.addButton}>
        ADD
        <button hidden></button>
      </Button>
    </form>
  )
}
