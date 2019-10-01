import React from 'react';
import logo from '../logo.svg';
import './Home.css';
import { CardContent } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextInput from '../components/TextInput';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reorderList } from '../redux/actions';

const useStyles = makeStyles({
  card: {
    maxWidth: '50%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = ({dispatch, ...props}) => {
  const classes = useStyles();
  const games = props.bestGames;

  const listItems = games.map((title, index) => {
    return (
      <Draggable draggableId={index + 1} index={index}>
           {provided => (
             <ListItem {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
               <ListItemText primary={`${index + 1}) ${title}`}></ListItemText>
             </ListItem>  
           )}
         </Draggable>
  )});
  
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    } 

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
        return;
    }

    const newGames = [...games];
    const tempGameA = newGames[destination.index];
    const tempGameB = newGames[source.index];

    newGames.splice(destination.index, 0, newGames.splice(source.index, 1)[0]);
    dispatch(reorderList(newGames));
  }

  return (
    <div className="App">
      <div class="flex-content">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <DragDropContext onDragEnd={onDragEnd}>
            <TextInput></TextInput>
              <Droppable droppableId={1}>
                {provided => (
                  <List innerRef={provided.innerRef} {...provided.droppableProps}>
                    {listItems}
                    {provided.placeHolder}
                  </List>
                )}
                
              </Droppable>
            </DragDropContext>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bestGames: state.bestGames
  };
};

export default connect(mapStateToProps)(Home);
