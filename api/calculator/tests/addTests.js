const assert = require("assert");
const Hapi = require("hapi");
const add = require("../routes/add");

describe("add tests", () => {
  let server;

  before(async () => {
    server = new Hapi.Server();
    server.route(add);
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

});
