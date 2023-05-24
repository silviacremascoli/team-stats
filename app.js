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
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    team._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    team._games.push(game);
  },
  get totalGames() {
    return `Until now our team played ${this.games.length} games.`;
  },
  get averagePoints() {
    const points = this.games.map((score) => {
      return score.teamPoints;
    });
    const pointsTotal = points.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);
    const averageScore = pointsTotal / points.length;
    return `Until now our average score has been ${Math.round(averageScore)}.`;
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);

console.log(team.totalGames);
console.log(team.averagePoints);
