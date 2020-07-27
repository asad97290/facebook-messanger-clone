import React, { useState, useEffect } from "react";
import { FormControl, Input, InputLabel, IconButton } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import styles from "./App.module.css";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
export default function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  function sendMessage(e) {
    e.preventDefault(); // prevent refreshing the page on each onClick (i.e button click)
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  }
  return (
    <div className={styles.container}>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h3>Welcome {username}</h3>
      <form className={styles.form}>
        <FormControl className={styles.formControl}>
          <InputLabel>Enter a Message.</InputLabel>
          <Input
            className={styles.input}
            value={input}
            er
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className={styles.iconButton}
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <Send />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}
