import React  from "react";
import { makeStyles } from "@material-ui/styles";
import { CardContent } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TextInput from "../components/TextInput";
import List from "@material-ui/core/List";
import GamesList from "../components/GamesList";
import { connect } from "react-redux";

function SurveyCard({ games, dispatch, handleUpdate }) {
  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newGames = [...games];

    newGames.splice(destination.index, 0, newGames.splice(source.index, 1)[0]);
    dispatch(handleUpdate(newGames));
  };

  const useStyles = makeStyles({
    card: {
      maxWidth: "50%"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <DragDropContext onDragEnd={onDragEnd}>
          <TextInput></TextInput>
          <Droppable droppableId={1}>
            {provided => (
              <List innerRef={provided.innerRef} {...provided.droppableProps}>
                <GamesList games={games}></GamesList>
                {provided.placeHolder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </CardContent>
    </Card>
  );
}

export default connect(null)(SurveyCard);
