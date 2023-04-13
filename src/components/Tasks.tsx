import { removeTask, selectTasks } from '@/redux/tasksSlice';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Home.module.css';
import { useAppDispatch } from '@/redux/hooks';
import { Task } from './Task';
import { List } from '@mui/material';


export function Tasks() {
  const tasks = useSelector(selectTasks);
  const isTasksEmpty: boolean = tasks === undefined || tasks.length === 0 ? true : false;  

  return (
    <List className={styles.w100}>
      { isTasksEmpty ?  null : tasks.map((task: string, index: number) => (<Task key={uuidv4()} task={task} index={index}/>))}
    </List>
  )
}
