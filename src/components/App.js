import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Song List</h2>
      <div className="ui container grid" style={{ marginTop: "30px" }}>
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
