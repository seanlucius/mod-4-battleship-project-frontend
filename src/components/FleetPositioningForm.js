import React from "react";
import BoardSpace from "./BoardSpace.js";

class FleetPositioningForm extends React.Component {
  state = {
    name: "",
    gameGrid: [
      { id: 1, coord: "A1", space: null },
      { id: 2, coord: "A2", space: null },
      { id: 3, coord: "A3", space: null },
      { id: 4, coord: "A4", space: null },
      { id: 5, coord: "A5", space: null },
      { id: 6, coord: "A6", space: null },
      { id: 7, coord: "A7", space: null },
      { id: 8, coord: "A8", space: null },
      { id: 9, coord: "A9", space: null },
      { id: 10, coord: "A10", space: null },
      { id: 11, coord: "B1", space: null },
      { id: 12, coord: "B2", space: null },
      { id: 13, coord: "B3", space: null },
      { id: 14, coord: "B4", space: null },
      { id: 15, coord: "B5", space: null },
      { id: 16, coord: "B6", space: null },
      { id: 17, coord: "B7", space: null },
      { id: 18, coord: "B8", space: null },
      { id: 19, coord: "B9", space: null },
      { id: 20, coord: "B10", space: null },
      { id: 21, coord: "C1", space: null },
      { id: 22, coord: "C2", space: null },
      { id: 23, coord: "C3", space: null },
      { id: 24, coord: "C4", space: null },
      { id: 25, coord: "C5", space: null },
      { id: 26, coord: "C6", space: null },
      { id: 27, coord: "C7", space: null },
      { id: 28, coord: "C8", space: null },
      { id: 29, coord: "C9", space: null },
      { id: 30, coord: "C10", space: null },
      { id: 31, coord: "D1", space: null },
      { id: 32, coord: "D2", space: null },
      { id: 33, coord: "D3", space: null },
      { id: 34, coord: "D4", space: null },
      { id: 35, coord: "D5", space: null },
      { id: 36, coord: "D6", space: null },
      { id: 37, coord: "D7", space: null },
      { id: 38, coord: "D8", space: null },
      { id: 39, coord: "D9", space: null },
      { id: 40, coord: "D10", space: null },
      { id: 41, coord: "E1", space: null },
      { id: 42, coord: "E2", space: null },
      { id: 43, coord: "E3", space: null },
      { id: 44, coord: "E4", space: null },
      { id: 45, coord: "E5", space: null },
      { id: 46, coord: "E6", space: null },
      { id: 47, coord: "E7", space: null },
      { id: 48, coord: "E8", space: null },
      { id: 49, coord: "E9", space: null },
      { id: 50, coord: "E10", space: null },
      { id: 51, coord: "F1", space: null },
      { id: 52, coord: "F2", space: null },
      { id: 53, coord: "F3", space: null },
      { id: 54, coord: "F4", space: null },
      { id: 55, coord: "F5", space: null },
      { id: 56, coord: "F6", space: null },
      { id: 57, coord: "F7", space: null },
      { id: 58, coord: "F8", space: null },
      { id: 59, coord: "F9", space: null },
      { id: 60, coord: "F10", space: null },
      { id: 61, coord: "G1", space: null },
      { id: 62, coord: "G2", space: null },
      { id: 63, coord: "G3", space: null },
      { id: 64, coord: "G4", space: null },
      { id: 65, coord: "G5", space: null },
      { id: 66, coord: "G6", space: null },
      { id: 67, coord: "G7", space: null },
      { id: 68, coord: "G8", space: null },
      { id: 69, coord: "G9", space: null },
      { id: 70, coord: "G10", space: null },
      { id: 71, coord: "H1", space: null },
      { id: 72, coord: "H2", space: null },
      { id: 73, coord: "H3", space: null },
      { id: 74, coord: "H4", space: null },
      { id: 75, coord: "H5", space: null },
      { id: 76, coord: "H6", space: null },
      { id: 77, coord: "H7", space: null },
      { id: 78, coord: "H8", space: null },
      { id: 79, coord: "H9", space: null },
      { id: 80, coord: "H10", space: null },
      { id: 81, coord: "I1", space: null },
      { id: 82, coord: "I2", space: null },
      { id: 83, coord: "I3", space: null },
      { id: 84, coord: "I4", space: null },
      { id: 85, coord: "I5", space: null },
      { id: 86, coord: "I6", space: null },
      { id: 87, coord: "I7", space: null },
      { id: 88, coord: "I8", space: null },
      { id: 89, coord: "I9", space: null },
      { id: 90, coord: "I10", space: null },
      { id: 91, coord: "J1", space: null },
      { id: 92, coord: "J2", space: null },
      { id: 93, coord: "J3", space: null },
      { id: 94, coord: "J4", space: null },
      { id: 95, coord: "J5", space: null },
      { id: 96, coord: "J6", space: null },
      { id: 97, coord: "J7", space: null },
      { id: 98, coord: "J8", space: null },
      { id: 99, coord: "J9", space: null },
      { id: 100, coord: "J10", space: null }
    ],
    fleet: [
      { ship: "AC", hits: 0 },
      { ship: "BS", hits: 0 },
      { ship: "SUB", hits: 0 },
      { ship: "CR", hits: 0 },
      { ship: "DS", hits: 0 }
    ],
    airCraftCoords: [],
    battleshipCoords: [],
    subCoords: [],
    cruiserCoords: [],
    destroyerCoords: [],
    shipSelectCount: 0
  };

  shipPositionHandler = spot => {
    switch (this.state.shipSelectCount) {
      case 0:
        this.selectAircraftPosition(spot);
        break;
      case 1:
        this.selectBattleshipPosition(spot);
        break;
      case 2:
        this.selectSubPosition(spot);
        break;
      case 3:
        this.selectCruiserPosition(spot);
        break;
      case 4:
        this.selectDestroyerPosition(spot);
        break;
    }
  };

  selectAircraftPosition = spot => {
    const index = this.state.gameGrid.findIndex(s => s === spot);
    const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
    if (this.state.airCraftCoords.length === 0 && spot.space === null) {
      newSpot.space = this.state.fleet[0];
      this.setState({
        gameGrid: [
          ...this.state.gameGrid.slice(0, index),
          newSpot,
          ...this.state.gameGrid.slice(index + 1)
        ],
        airCraftCoords: [...this.state.airCraftCoords, newSpot]
      });
    } else if (this.state.airCraftCoords.length === 1 && spot.space === null) {
      let current = this.state.airCraftCoords[0].id;
      let adjacents = [current + 1, current - 1, current + 10, current - 10];
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[0];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          airCraftCoords: [...this.state.airCraftCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (this.state.airCraftCoords.length === 2 && spot.space === null) {
      let current = this.state.airCraftCoords[1].id;
      let pos =
        this.state.airCraftCoords[1].id - this.state.airCraftCoords[0].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[0];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          airCraftCoords: [...this.state.airCraftCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (this.state.airCraftCoords.length === 3 && spot.space === null) {
      let current = this.state.airCraftCoords[2].id;
      let pos =
        this.state.airCraftCoords[2].id - this.state.airCraftCoords[1].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[0];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          airCraftCoords: [...this.state.airCraftCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (this.state.airCraftCoords.length === 4 && spot.space === null) {
      let current = this.state.airCraftCoords[3].id;
      let pos =
        this.state.airCraftCoords[3].id - this.state.airCraftCoords[2].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[0];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          airCraftCoords: [...this.state.airCraftCoords, newSpot],
          shipSelectCount: this.state.shipSelectCount + 1
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else {
      window.alert("Invalid selection, please try again.");
    }
  };

  selectBattleshipPosition = spot => {
    const index = this.state.gameGrid.findIndex(s => s === spot);
    const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
    if (this.state.battleshipCoords.length === 0 && spot.space === null) {
      newSpot.space = this.state.fleet[1];
      this.setState({
        gameGrid: [
          ...this.state.gameGrid.slice(0, index),
          newSpot,
          ...this.state.gameGrid.slice(index + 1)
        ],
        battleshipCoords: [...this.state.battleshipCoords, newSpot]
      });
    } else if (
      this.state.battleshipCoords.length === 1 &&
      spot.space === null
    ) {
      let current = this.state.battleshipCoords[0].id;
      let adjacents = [current + 1, current - 1, current + 10, current - 10];
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[1];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          battleshipCoords: [...this.state.battleshipCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (
      this.state.battleshipCoords.length === 2 &&
      spot.space === null
    ) {
      let current = this.state.battleshipCoords[1].id;
      let pos =
        this.state.battleshipCoords[1].id - this.state.battleshipCoords[0].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[1];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          battleshipCoords: [...this.state.battleshipCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (
      this.state.battleshipCoords.length === 3 &&
      spot.space === null
    ) {
      let current = this.state.battleshipCoords[2].id;
      let pos =
        this.state.battleshipCoords[2].id - this.state.battleshipCoords[1].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[1];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          battleshipCoords: [...this.state.battleshipCoords, newSpot],
          shipSelectCount: this.state.shipSelectCount + 1
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else {
      window.alert("Invalid selection, please try again.");
    }
  };

  selectSubPosition = spot => {
    const index = this.state.gameGrid.findIndex(s => s === spot);
    const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
    if (this.state.subCoords.length === 0 && spot.space === null) {
      newSpot.space = this.state.fleet[2];
      this.setState({
        gameGrid: [
          ...this.state.gameGrid.slice(0, index),
          newSpot,
          ...this.state.gameGrid.slice(index + 1)
        ],
        subCoords: [...this.state.subCoords, newSpot]
      });
    } else if (this.state.subCoords.length === 1 && spot.space === null) {
      let current = this.state.subCoords[0].id;
      let adjacents = [current + 1, current - 1, current + 10, current - 10];
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[2];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          subCoords: [...this.state.subCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (this.state.subCoords.length === 2 && spot.space === null) {
      let current = this.state.subCoords[1].id;
      let pos = this.state.subCoords[1].id - this.state.subCoords[0].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[2];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          subCoords: [...this.state.subCoords, newSpot],
          shipSelectCount: this.state.shipSelectCount + 1
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else {
      window.alert("Invalid selection, please try again.");
    }
  };

  selectCruiserPosition = spot => {
    const index = this.state.gameGrid.findIndex(s => s === spot);
    const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
    if (this.state.cruiserCoords.length === 0 && spot.space === null) {
      newSpot.space = this.state.fleet[3];
      this.setState({
        gameGrid: [
          ...this.state.gameGrid.slice(0, index),
          newSpot,
          ...this.state.gameGrid.slice(index + 1)
        ],
        cruiserCoords: [...this.state.cruiserCoords, newSpot]
      });
    } else if (this.state.cruiserCoords.length === 1 && spot.space === null) {
      let current = this.state.cruiserCoords[0].id;
      let adjacents = [current + 1, current - 1, current + 10, current - 10];
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[3];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          cruiserCoords: [...this.state.cruiserCoords, newSpot]
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else if (this.state.cruiserCoords.length === 2 && spot.space === null) {
      let current = this.state.cruiserCoords[1].id;
      let pos = this.state.cruiserCoords[1].id - this.state.cruiserCoords[0].id;
      let adjacents = [];
      if (Math.abs(pos) === 1) {
        adjacents = [current + 1, current - 1];
      } else if (Math.abs(pos) === 10) {
        adjacents = [current + 10, current - 10];
      }
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[3];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          cruiserCoords: [...this.state.cruiserCoords, newSpot],
          shipSelectCount: this.state.shipSelectCount + 1
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else {
      window.alert("Invalid selection, please try again.");
    }
  };

  selectDestroyerPosition = spot => {
    const index = this.state.gameGrid.findIndex(s => s === spot);
    const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
    if (this.state.destroyerCoords.length === 0 && spot.space === null) {
      newSpot.space = this.state.fleet[4];
      this.setState({
        gameGrid: [
          ...this.state.gameGrid.slice(0, index),
          newSpot,
          ...this.state.gameGrid.slice(index + 1)
        ],
        destroyerCoords: [...this.state.destroyerCoords, newSpot]
      });
    } else if (this.state.destroyerCoords.length === 1 && spot.space === null) {
      let current = this.state.destroyerCoords[0].id;
      let adjacents = [current + 1, current - 1, current + 10, current - 10];
      if (adjacents.includes(spot.id)) {
        const index = this.state.gameGrid.findIndex(s => s === spot);
        const newSpot = this.state.gameGrid.find(s => s.id === spot.id);
        newSpot.space = this.state.fleet[4];
        this.setState({
          gameGrid: [
            ...this.state.gameGrid.slice(0, index),
            newSpot,
            ...this.state.gameGrid.slice(index + 1)
          ],
          destroyerCoords: [...this.state.destroyerCoords, newSpot],
          shipSelectCount: this.state.shipSelectCount + 1
        });
      } else {
        window.alert("Please select an adjacent coordinate");
      }
    } else {
      window.alert("Invalid selection, please try again.");
    }
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <>
        <h4>{`${this.props.name} pick your fleet positions`}</h4>
        <div className="board">
          {this.state.gameGrid.map(g => (
            <BoardSpace
              spot={g}
              selectShipSpot={this.shipPositionHandler}
              selecting={true}
            />
          ))}
          {this.state.shipSelectCount === 5 ? (
            <form onSubmit={() => this.props.handleSubmit(this.state)}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Confirm?" />
            </form>
          ) : null}
        </div>
      </>
    );
  }
}
export default FleetPositioningForm;
