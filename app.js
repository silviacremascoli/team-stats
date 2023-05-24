const team = {
  _players: [
    {
      firstName: "Harry",
      lastName: "Stone",
      age: 23,
    },
    {
      firstName: "Joe",
      lastName: "Smith",
      age: 21,
    },
    {
      firstName: "Richard",
      lastName: "Carter",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "Olimpia Milano",
      teamPoints: 63,
      opponentPoints: 56,
    },
    {
      opponent: "Virtus Bologna",
      teamPoints: 50,
      opponentPoints: 65,
    },
    {
      opponent: "Dinamo Sassari",
      teamPoints: 62,
      opponentPoints: 63,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName,
      lastName,
      age,
    };
    team._players.push(player);
  },
};
