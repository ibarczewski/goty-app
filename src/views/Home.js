import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import { reorderBestGamesList, reorderBestRemakesList } from "../redux/actions";
import SurveyCard from '../components/SurveyCard';

const Home = ({ dispatch, ...props }) => {
  const bestGames = props.bestGames;
  const bestRemakes = props.bestRemakes;

  return (
    <div className="App">
      <div className="flex-content">
        <SurveyCard handleUpdate={reorderBestGamesList} games={bestGames}></SurveyCard>
        <SurveyCard handleUpdate={reorderBestRemakesList} games={bestRemakes}></SurveyCard>
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
