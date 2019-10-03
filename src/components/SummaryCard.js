import React from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { CardContent } from "@material-ui/core";
import { Card } from "@material-ui/core";

function SummaryCard({ bestGames, bestRemakes }) {
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
    },
    content: {
        display: "flex",
    },
    flex: {
        display: "flex",
        flexDirection: "column"
    }
  });
  const classes = useStyles();

  const surveyResults = [bestGames, bestRemakes];
  const renderedResults = games => games.map((game, index) => <div>{index + 1 + ") " + game}</div>);
  const renderedResultsList = surveyResults.map(results => <div className={classes.flex}>{renderedResults(results)}</div>);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {renderedResultsList}
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    bestGames: state.bestGames,
    bestRemakes: state.bestRemakes
  };
};

export default connect(mapStateToProps)(SummaryCard);
