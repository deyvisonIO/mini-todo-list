import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '@/redux/tasksSlice';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Button, Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { removeListener } from 'process';
import { increment } from '@/redux/coinsSlice';

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

  function completeTask() { 
    dispatch(removeTask({
      index,
    }));
    dispatch(increment());
  }

  return (
    <ListItem className={styles.listItem}>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple onChange={() => setTimeout(completeTask, 200)} />
        </ListItemIcon>
      <ListItemText>
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
        <p >{task}</p>
      }</ListItemText>
      </ListItemButton>
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
