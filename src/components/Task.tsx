import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '@/redux/tasksSlice';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

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
    const payload = {
      index,
      newTask
    }
    dispatch(editTask(payload));
    changeEditingState();
    return;
  }

  return (
    <li>
      {isEditing ? 
        <form onSubmit={handleTaskSubmit}>
          <input 
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
          ></input>
          <button className={styles.button}>Confirm</button>
        </form> : 
        <p>{task}</p>
      }
      {isEditing ? null :
        <button 
          className={styles.button}
          onClick={() => dispatch(removeTask({index}))}
        >
          X 
        </button>}
      {isEditing ? null :
        <button className={styles.button} onClick={changeEditingState}> EDIT </button>
      }
    </li>
  );
}
