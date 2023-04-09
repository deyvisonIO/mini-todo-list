import { useDispatch, useSelector } from "react-redux"
import { selectCoins } from "../redux/coinsSlice"
import { increment } from "../redux/coinsSlice";
import styles from "../styles/Home.module.css";
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

export function Coins() {
  const coins = useSelector(selectCoins);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(increment())} className={styles.coins}>
      <MonetizationOnTwoToneIcon />
      {coins}
    </div>
  )
}
