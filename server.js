// require("dotenv").config();
const Hapi = require("hapi");
const glob = require("glob");
const path = require("path");


// Create a server with a host and port
const server = Hapi.server({
  host: "0.0.0.0",
  port: process.env.PORT | 4000,
  routes: {
    validate: {
      failAction: async (request, h, err) => {
          console.error(err);
          throw err;
      },
    },
  },
});

// Start the server
async function start() {
  try {

    glob
      .sync("api/**/routes/*.js", {
        root: __dirname,
      })
      .forEach((file) => {
        const route = require(path.join(__dirname, file));
        server.route(route);
      });

    console.log("Server running at:", server.info.uri);

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
