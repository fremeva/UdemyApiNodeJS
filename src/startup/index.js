const express = require("express");

let _express = null;
let _config = null;

class Server {
  constructor({ Config, router }) {
    _config = Config;
    _express = express().use(router);
  }

  async start() {
    _express.listen(_config.PORT, () => {
      console.log(
        `${_config.APPLICATION_NAME} App running on port: ${_config.PORT}`
      );
    });
    return true;
  }
}

module.exports = Server;
