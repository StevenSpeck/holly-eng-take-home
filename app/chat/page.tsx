// import styles from './styles.css'
import styles from "./chat.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <ol className={styles.chatContainer}>
        <li className={styles.chatResponse}>message 1</li>
        <li className={styles.chatQuery}>message 2</li>
        <li className={styles.chatResponse}>message 3</li>
        
      </ol>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.inputBox}></input>
        <button className={styles.submitButton}>Submit</button>
      </div>

      
    </div>
  );
}
