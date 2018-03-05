require('./server');
const Code = require("code");
const Lab = require("lab");
const request = require("request");
const rp = require("request-promise");

const lab = exports.lab = Lab.script();

lab.experiment("Server", () => {
    lab.test("Has to add an user", async () => {
        const options = {
            body: {
                id: 5,
                name: "Pepe",
                permission: "user",
            },
            json: true,
            method: "POST",
            uri: "http://localhost:3000/user",
        };
        const response = await rp(options);
        Code.expect(response).to.have.length(5);
        console.log(response[4]);
        Code.expect(response[4].name).to.be.equal("Pepe");
    });
});
