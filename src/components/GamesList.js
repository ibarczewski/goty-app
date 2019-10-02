import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function GamesList({ games }) {
  const list = games.map((title, index) => {
    return (
      <Draggable draggableId={index + 1} index={index}>
        {provided => (
          <ListItem
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <ListItemText primary={`${index + 1}) ${title}`}></ListItemText>
          </ListItem>
        )}
      </Draggable>
    );
  });

  return list;
}

export default GamesList;
