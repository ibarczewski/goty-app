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

function Home() {
  const classes = useStyles();

  const sampleText = ['Outer Wilds', 'Control', 'The Surge 2'];

  const listItems = sampleText.map((title, index) => {
    return (
    <ListItem>
      <ListItemText primary={`${index + 1}) ${title}`}></ListItemText>
    </ListItem>);
  });

  return (
    <div className="App">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <TextInput></TextInput>
          <List>
            {listItems}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
