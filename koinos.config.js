const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

module.exports = {
  class: "Main",
  proto: [
    "./proto/common.proto",
    "./proto/ownablemap.proto",
    "./proto/main.proto",
    "./proto/vault.proto",
    "./proto/vote.proto",
    "./proto/token.proto",
  ],
};
