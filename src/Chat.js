import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./Chat.css";

function Chat(props) {
  return (
    <div className="chat_list">
      <List>
        <ListItem>
          <ListItemText primary="Dummy Name" secondary={props.text} />
        </ListItem>
      </List>
    </div>
  );
}

export default Chat;
