import React from "react";
import BoardSpace from "../components/BoardSpace";

class OpponentBoard extends React.Component {
  render() {
    return (
      <>
        <h2>{`Sink ${this.props.name}'s Fleet!`}</h2>
        <div className="board">
          {this.props.game.map(g => (
            <BoardSpace spot={g} hidden={true} attack={this.props.attack} />
          ))}
        </div>
      </>
    );
  }
}

export default OpponentBoard;
