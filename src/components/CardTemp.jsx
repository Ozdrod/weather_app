import styles from "./CardTemp.module.css";

function CardTemp({label, value}){
    return(
      <div className={styles.cardTemp}>
      <label>{label}</label>
      <span>{value}º</span>
    </div>
    )
  }

export default CardTemp ;
