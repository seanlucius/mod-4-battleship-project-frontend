import React from "react";
import BoardSpace from "../components/BoardSpace";

class PlayerBoard extends React.Component {
  render() {
    return (
      <>
        <h2>Your Fleet</h2>
        <div className="board">
          {this.props.game.map(g => (
            <BoardSpace spot={g} />
          ))}
        </div>
      </>
    );
  }
}

export default PlayerBoard;
