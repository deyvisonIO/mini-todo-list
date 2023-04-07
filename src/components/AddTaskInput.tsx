import { useState } from "react"
import {
  addTask
} from "../redux/tasksSlice"
import { useAppDispatch } from "@/redux/hooks";

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
      <input
        value={newTask}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  )
}
