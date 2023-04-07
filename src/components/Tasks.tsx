import { removeTask, selectTasks } from '@/redux/tasksSlice';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Home.module.css';
import { useAppDispatch } from '@/redux/hooks';

interface propsInterface {
  tasks: string[],
}

export function Tasks() {
  const tasks = useSelector(selectTasks);
  const isTasksEmpty: boolean = tasks === undefined || tasks.length === 0 ? true : false;  
  const dispatch = useAppDispatch();

  return (
    <ul>
      { isTasksEmpty ?  null : tasks.map((task: string, index: number) => (
        <li key={uuidv4()}>{task} <button className={styles.button} onClick={() => dispatch(removeTask({index}))}>X</button></li>
      )) }
    </ul>
  )
}
