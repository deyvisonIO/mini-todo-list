import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '@/redux/tasksSlice';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Button, ListItem, ListItemSecondaryAction } from '@mui/material';

interface propsInterface {
  task: string,
  index: number
}

export function Task({ task, index }: propsInterface) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState<string>(task);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function changeEditingState(): undefined {
    setIsEditing((previous:boolean) => !previous); 
    return; 
  }

  function handleTaskSubmit(e: React.FormEvent<HTMLFormElement>): undefined {
    console.log("submitting... ")
    e.preventDefault();
    const payload = {
      index,
      newTask
    }
    dispatch(editTask(payload));
    changeEditingState();
    return;
  }

  return (
    <ListItem className={styles.listItem}>
      {isEditing ? 
        <form onSubmit={handleTaskSubmit} className={styles.listItem}>
          <input 
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
          ></input>
        <Button variant="contained" color="secondary" type="submit"> 
          Confirm
        </Button>
        </form> : 
        <p>{task}</p>
      }
      <ListItemSecondaryAction className={styles.listButtons}>
      {isEditing ? null :
        <Button variant="contained" color="secondary" onClick={changeEditingState}> EDIT </Button>
      }
      {isEditing ? null :
        <Button
          onClick={() => dispatch(removeTask({index}))}
          variant="contained"
          color="error"
        >
          X 
        </Button>}
      </ListItemSecondaryAction>
    </ListItem>
  );
}
