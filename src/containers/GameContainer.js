import React from "react";
import PlayerBoard from "./PlayerBoard";
import OpponentBoard from "./OpponentBoard.js";
import FleetPositioningForm from "../components/FleetPositioningForm.js";

class GameContainer extends React.Component {
  state = {
    player1: null,
    p1ACHits: 0,
    p1BSHits: 0,
    p1SubHits: 0,
    p1CRHits: 0,
    p1DSHits: 0,
    player2: null,
    p2ACHits: 0,
    p2BSHits: 0,
    p2SubHits: 0,
    p2CRHits: 0,
    p2DSHits: 0,
    turnOne: true,
    attacked: false,
    lastAttack: "",
    winner: ""
  };

  submitFleet = stuff => {
    if (this.state.player1 === null) {
      this.setState({
        player1: stuff
      });
    }
    if (this.state.player1 !== null && this.state.player2 === null) {
      this.setState({
        player2: stuff
      });
    }
  };

  attack = spot => {
    // player 1 attacking
    if (this.state.turnOne && spot.space === null) {
      let gridMiss = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridMiss.space = "MISS";
      window.alert("MISS!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridMiss,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          attacked: true,
          lastAttack: `${this.state.player1.name} missed. What a chump.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }
    if (
      this.state.turnOne &&
      spot.space.ship === "AC" &&
      this.state.p2ACHits < 4
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY AIRCRAFT CARRIER HIT!");

      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2ACHits: this.state.p2ACHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } hit your Aircraft Carrier. Carry on.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "AC" &&
      this.state.p2ACHits === 4
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY AIRCRAFT CARRIER SUNK!");

      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2ACHits: this.state.p2ACHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } sunk your Aircraft Carrier! Now how will you carry on?`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "BS" &&
      this.state.p2BSHits < 3
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY BATTLESHIP HIT!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2BSHits: this.state.p2BSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } hit your Battleship. Ship happens.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "BS" &&
      this.state.p2BSHits === 3
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY BATTLESHIP SUNK!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2BSHits: this.state.p2BSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } sunk your Battleship. Such BS.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "SUB" &&
      this.state.p2SubHits < 2
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY SUB HIT!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2SubHits: this.state.p2SubHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } hit your Sub. Sub-a-lub-a-dub-dub.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "SUB" &&
      this.state.p2SubHits === 2
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY SUB SUNK!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2SubHits: this.state.p2SubHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } sunk your Sub. Subthing's wrong.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "CR" &&
      this.state.p2CRHits < 2
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY CRUISER HIT!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2CRHits: this.state.p2CRHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } hit your Cruiser. They're cruisin for a bruisin.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "CR" &&
      this.state.p2CRHits === 2
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY CRUISER SUNK!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2CRHits: this.state.p2CRHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } sunk your Cruiser. Cruise idea was it to put this ship here?`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "DS" &&
      this.state.p2DSHits < 1
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY DESTROYER HIT!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2DSHits: this.state.p2DSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } hit your Destroyer. Seek and destroy.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne &&
      spot.space.ship === "DS" &&
      this.state.p2DSHits === 1
    ) {
      let gridHit = this.state.player2.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player2.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY DESTROYER SUNK!");
      this.setState(
        {
          player2: {
            ...this.state.player2,
            gameGrid: [
              ...this.state.player2.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player2.gameGrid.slice(gridIndex + 1)
            ]
          },
          p2DSHits: this.state.p2DSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player1.name
          } sunk your Destroyer. One could say you just got destroyed.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    // player2 attack

    if (this.state.turnOne === false && spot.space === null) {
      let gridMiss = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridMiss.space = "MISS";
      window.alert("MISS!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridMiss,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          attacked: true,
          lastAttack: `${this.state.player2.name} missed. What a chump.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "AC" &&
      this.state.p1ACHits < 4
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY AIRCRAFT CARRIER HIT!");

      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1ACHits: this.state.p1ACHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } hit your Aircraft Carrier. Carry on.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "AC" &&
      this.state.p1ACHits === 4
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY AIRCRAFT CARRIER SUNK!");

      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1ACHits: this.state.p1ACHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } sunk your Aircraft Carrier! Now how will you carry on?`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "BS" &&
      this.state.p1BSHits < 3
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY BATTLESHIP HIT!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1BSHits: this.state.p1BSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } hit your Battleship. Ship happens.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "BS" &&
      this.state.p1BSHits === 3
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY BATTLESHIP SUNK!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1BSHits: this.state.p1BSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } sunk your Battleship. Such BS.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "SUB" &&
      this.state.p1SubHits < 2
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY SUB HIT!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1SubHits: this.state.p1SubHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } hit your Sub. Sub-a-lub-a-dub-dub.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "SUB" &&
      this.state.p1SubHits === 2
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY SUB SUNK!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1SubHits: this.state.p1SubHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } sunk your Sub. Subthing's wrong.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "CR" &&
      this.state.p1CRHits < 2
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY CRUISER HIT!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1CRHits: this.state.p1CRHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } hit your Cruiser. They're cruisin for a bruisin.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "CR" &&
      this.state.p1CRHits === 2
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY CRUISER SUNK!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1CRHits: this.state.p1CRHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } sunk your Cruiser. Cruise idea was it to put this ship here?`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "DS" &&
      this.state.p1DSHits < 1
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY DESTROYER HIT!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1DSHits: this.state.p1DSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } hit your Destroyer. Seek and destroy.`
        },
        () => setTimeout(this.turnHandler, 2000)
      );
    }

    if (
      this.state.turnOne === false &&
      spot.space.ship === "DS" &&
      this.state.p1DSHits === 1
    ) {
      let gridHit = this.state.player1.gameGrid.find(g => g === spot);
      let gridIndex = this.state.player1.gameGrid.findIndex(s => s === spot);
      gridHit.space = "HIT";
      window.alert("ENEMY DESTROYER SUNK!");
      this.setState(
        {
          player1: {
            ...this.state.player1,
            gameGrid: [
              ...this.state.player1.gameGrid.slice(0, gridIndex),
              gridHit,
              ...this.state.player1.gameGrid.slice(gridIndex + 1)
            ]
          },
          p1DSHits: this.state.p1DSHits + 1,
          attacked: true,
          lastAttack: `${
            this.state.player2.name
          } sunk your Destroyer. One could say you just got destroyed.`
        },
        () => {
          this.winCheck();
          setTimeout(this.turnHandler, 2000);
        }
      );
    }
  };

  turnHandler = () => {
    this.setState({
      turnOne: !this.state.turnOne,
      attacked: false
    });
  };

  winCheck = () => {
    if (
      this.state.p2ACHits === 5 &&
      this.state.p2BSHits === 4 &&
      this.state.p2SubHits === 3 &&
      this.state.p2CRHits === 3 &&
      this.state.p2DSHits === 2
    ) {
      this.setState({
        winner: "Player 1"
      });
    }
    if (
      this.state.p1ACHits === 5 &&
      this.state.p1BSHits === 4 &&
      this.state.p1SubHits === 3 &&
      this.state.p1CRHits === 3 &&
      this.state.p1DSHits === 2
    ) {
      this.setState({
        winner: "Player 2"
      });
    }
  };

  newGameHandler = () => {
    this.setState({
      player1: null,
      p1ACHits: 0,
      p1BSHits: 0,
      p1SubHits: 0,
      p1CRHits: 0,
      p1DSHits: 0,
      player2: null,
      p2ACHits: 0,
      p2BSHits: 0,
      p2SubHits: 0,
      p2CRHits: 0,
      p2DSHits: 0,
      turnOne: true,
      attacked: false,
      lastAttack: "",
      winner: ""
    });
  };

  render() {
    return (
      <div>
        <h1 id="title">BATTLE$HIP</h1>
        {this.state.player1 === null ? (
          <FleetPositioningForm
            handleSubmit={this.submitFleet}
            name={"Player 1"}
          />
        ) : null}
        {this.state.player1 !== null && this.state.player2 === null ? (
          <FleetPositioningForm
            handleSubmit={this.submitFleet}
            name={"Player 2"}
          />
        ) : null}
        {this.state.player1 !== null &&
        this.state.player2 !== null &&
        this.state.turnOne &&
        !this.state.attacked &&
        this.state.winner === "" ? (
          <>
            <OpponentBoard
              game={this.state.player2.gameGrid}
              attack={this.attack}
              name={this.state.player2.name}
            />
            <PlayerBoard
              game={this.state.player1.gameGrid}
              name={this.state.player1.name}
            />
          </>
        ) : null}
        {this.state.player1 !== null &&
        this.state.player2 !== null &&
        this.state.turnOne === false &&
        !this.state.attacked &&
        this.state.winner === "" ? (
          <>
            <OpponentBoard
              game={this.state.player1.gameGrid}
              attack={this.attack}
              name={this.state.player1.name}
            />
            <PlayerBoard
              game={this.state.player2.gameGrid}
              name={this.state.player2.name}
            />
          </>
        ) : null}
        {this.state.attacked &&
        this.state.turnOne &&
        this.state.winner === "" ? (
          <>
            <h1>{`Switching players. Give the computer to ${
              this.state.player2.name
            }.`}</h1>
            <h4>{this.state.lastAttack}</h4>
          </>
        ) : null}
        {this.state.attacked &&
        !this.state.turnOne &&
        this.state.winner === "" ? (
          <>
            <h1>{`Switching players. Give the computer to ${
              this.state.player1.name
            }.`}</h1>
            <h4>{this.state.lastAttack}</h4>
          </>
        ) : null}
        {this.state.winner === "Player 1" ? (
          <>
            <h1>{`${this.state.player1.name} wins!`}</h1>
            <button onClick={this.newGameHandler}>Start a new game?</button>
          </>
        ) : null}
        {this.state.winner === "Player 2" ? (
          <>
            <h1>{`${this.state.player2.name} wins!`}</h1>
            <div className="letter">
              <button onClick={this.newGameHandler}>Start a new game?</button>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default GameContainer;
