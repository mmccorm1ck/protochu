require('dotenv').config();
const ws = require("ws");
const axios = require("axios");
const ws = require("ws");
const querystring = require("querystring");

class ShowdownHandler
{
  constructor(url)
  {
    this.url = url;
    this.websocket = new ws("ws://sim3.psim.us:8000/showdown/websocket");
    this.username = process.env.USER;
    this.password = process.env.PASS;
    this.challstr = "";
  }
  async login()
  {
    const loginUrl = "https://play.pokemonshowdown.com/~~showdown/action.php";
    const loginData = querystring.stringity([
      act: "login",
      name: this.username,
      pass: this.password,
      challstr: this.challstr
    ])
    let response = await axios.post(loginUrl, loginData);
  }
  joinGame()
  {
    return 'glhf!';
  }
  watchReplay()
  {
    return 'ggwp!';
  }
}

module.exports = ShowdownHandler;
