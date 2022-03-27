const assert = require("assert");
const Hapi = require("hapi");
const add = require("../routes/add");
const subtract = require("../routes/subtract");

describe("add tests", () => {
  let server;

  before(async () => {
    server = new Hapi.Server();
    server.route(add);
    server.route(subtract);
    await server.initialize();
  });

  after(async () => {
   
  });

  it("add 2 positive number", async () => {
    const payload = {
      a: 1,
      b: 2,
    };

    const res = await server.inject({
      url: "/api/v1/add",
      method: "POST",
      payload: payload
    });
    
    console.log(res.payload);

    assert(Number(res.payload) === 3);
  });


  it("subtract 2 positive number", async () => {
    const payload = {
      a: 10,
      b: 6,
    };

    const res = await server.inject({
      url: "/api/v1/subtract",
      method: "POST",
      payload: payload
    });
    
    console.log(res.payload);

    assert(Number(res.payload) === 4);
  });

});
