import React from "react";

class BoardSpace extends React.Component {
  render() {
    const spot = this.props.spot;
    return (
      <div>
        {spot.space !== null &&
        !this.props.hidden &&
        spot.space !== "HIT" &&
        spot.space !== "MISS" ? (
          <div id={spot.id} className="square-ship">
            <p>{spot.space.ship}</p>
          </div>
        ) : null}

        {spot.space !== null &&
        this.props.hidden &&
        spot.space !== "HIT" &&
        spot.space !== "MISS" ? (
          <div
            id={spot.id}
            className="square"
            onClick={
              typeof this.props.attack !== "undefined"
                ? () => this.props.attack(spot)
                : null
            }
          >
            <p>{spot.coord}</p>
          </div>
        ) : null}

        {spot.space === "HIT" ? (
          <div id={spot.id} className="square-hit">
            <p>X</p>
          </div>
        ) : null}

        {spot.space === "MISS" ? (
          <div id={spot.id} className="square-miss">
            <p>X</p>
          </div>
        ) : null}

        {spot.space === null && !this.props.selecting ? (
          <div
            id={spot.id}
            className="square"
            onClick={
              typeof this.props.attack !== "undefined"
                ? () => this.props.attack(spot)
                : null
            }
          >
            <p>{spot.coord}</p>
          </div>
        ) : null}

        {spot.space === null && this.props.selecting ? (
          <div
            id={spot.id}
            className="square"
            onClick={
              spot.space === null && this.props.selecting
                ? () => this.props.selectShipSpot(spot)
                : null
            }
          >
            <p>{spot.coord}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default BoardSpace;
