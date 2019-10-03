import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import {
  reorderBestGamesList,
  reorderBestRemakesList,
  addBestGamesGame,
  addBestRemakesList
} from "../redux/actions";
import SurveyCard from "../components/SurveyCard";
import SummaryCard from "../components/SummaryCard";

const Home = ({ dispatch, ...props }) => {
  const surveys = [
    {
      handleUpdate: reorderBestGamesList,
      handleAdd: addBestGamesGame,
      games: props.bestGames
    },
    {
      handleUpdate: reorderBestRemakesList,
      handleAdd: addBestRemakesList,
      games: props.bestRemakes
    }
  ];

  return (
    <div className="App">
      <div className="flex-content">
        {surveys.map(survey => (
          <SurveyCard
            handleUpdate={survey.handleUpdate}
            handleAdd={survey.handleAdd}
            games={survey.games}
          />
        ))}
        <SummaryCard />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bestGames: state.bestGames,
    bestRemakes: state.bestRemakes
  };
};

export default connect(mapStateToProps)(Home);
