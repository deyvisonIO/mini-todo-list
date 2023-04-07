import { useDispatch } from 'react-redux';
import { removeTask } from '@/redux/tasksSlice';
import styles from '../styles/Home.module.css';

interface propsInterface {
  task: string,
  index: number
}

export function Task({ task, index }: propsInterface) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{task}</p>
      <button className={styles.button} onClick={() => dispatch(removeTask({index}))}> X </button>
    </li>
  );
}
