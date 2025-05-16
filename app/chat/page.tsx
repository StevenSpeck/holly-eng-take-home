"use client";
import styles from "./chat.module.css";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { text: "message 1", label: "Response" },
    { text: "message 2", label: "Query" },
    { text: "message 3", label: "Response" },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, label: "Query" }, { text: "Did you ask '" + inputValue + "' ?", label: "Response" }]);
      setInputValue(''); // Clear input after adding
    }
  };
  return (
    <div className={styles.body}>
      <ol className={styles.chatContainer}>
        {messages.map((item, index) => (
  <li key={index} className={item.label === "Query" ? styles.chatQuery : styles.chatResponse}>{item.text}</li>
))}
      </ol>
      <div className={styles.inputContainer}>
        <input type="text"         
        value={inputValue}
        onChange={handleChange}
        onKeyUp={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Type something" className={styles.inputBox}>
        </input>
        <button className={styles.submitButton} onClick={handleAdd}>Submit</button>
      </div>
    </div>
  );
}

