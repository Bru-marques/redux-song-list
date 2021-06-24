import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scruns", duration: "3:52", singer: "TLC" },
    { title: "Macarena", duration: "2:58", singer: "Lo Del Rio" },
    { title: "Jump", duration: "2:47", singer: "Kris Kross" },
    { title: "No Diggity", duration: "3:51", singer: "Blackstreet" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
