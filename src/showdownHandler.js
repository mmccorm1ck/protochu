require('dotenv').config();
const ws = require("ws");
const axios = require("axios");

const joinGame = (url) => { // Placeholder function for joining active game
  return 'glhf!';
};

const watchReplay = (url) => { // Placeholder function for watching replays
  return 'ggwp!';
};

async login()
{
  const username = process.env.USER;
  const password = process.env.PASS;
}

const handler = { // Functions to export
  joinGame,
  watchReplay,
};

module.exports = handler;
