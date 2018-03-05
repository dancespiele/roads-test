const roads = require("roads");
const roadsServer = require("roads-server");
const users = require("./assets");

const app = new roads.Road();
const Response = roads.Response;

app.use(roads.middleware.parseBody);

const server = new roadsServer.Server(app, (error) => {
    switch (error.code) {
        case 404:
            return new Response("Not Found", 404);
        case 405:
            return new Response("Not Allowed", 405);
        default:
        case 500:
            return new Response(error.message, 500);
    }
});

const router = new roads.middleware.SimpleRouter(app);

router.addRoute('POST','/user', (url, body) => {
    const user = body;
    users.push(user);
    return new Response(users, 200);
});

server.listen(3000, () => {
    console.log("Serve is running in the port 3000");
});
