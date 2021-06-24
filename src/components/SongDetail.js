import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div className="ui segment">
      <h3>Details for:</h3>
      <br />
      <p>
        <b>Title: </b>
        {song.title}
      </p>
      <p>
        <b>Duration: </b>
        {song.duration}
      </p>
      <p>
        <b>Singer: </b>
        {song.singer}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
