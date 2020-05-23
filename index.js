const mongoose = require("mongoose");

const container = require("./src/startup/container");
const server = container.resolve("app");
const { MONGO_URL } = container.resolve("Config");

// Aniadimos configuracion
mongoose.set("useCreateIndex", true);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => server.start())
  .catch(console.log);
