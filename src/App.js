import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Chat from "./Chat";
import firebase from "firebase";
import db from "./firebase";

function App() {
  const [todos, setTodo] = useState(["Hi there"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("chat")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(snapshot.docs.map((doc) => doc.data().pesan));
        
      });
      console.log(todos);
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("chat").add({
      pesan: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <form>
        <FormControl>
          <InputLabel>Ketik sesuatu ...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="secondary"
        >
          Kirim
        </Button>
      </form>

      <ul>
        {todos.map((todo) => {
          console.log(todos)
          return (
            <Chat text={todo} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
