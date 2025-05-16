"use client";
import styles from "./chat.module.css";
import { useState, ChangeEvent } from "react";
import { triggerCohereChat } from "./chatbot";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { text: "Please enter your question below and I will try to answer to the best of my ability!", label: "Response" },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = async () => {
    if (inputValue.trim() !== '') {
      const response = await triggerCohereChat(inputValue);
      if (response !== undefined) {
        setMessages([...messages, { text: inputValue, label: "Query" }, { text: response, label: "Response" }, {text: "Let me know if you have any new or followup questions.", label: "Response"}]);
      } else { 
        setMessages([...messages, { text: inputValue, label: "Query" }, { text: "No response received", label: "Response" }]);
      }
      setInputValue('');
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

