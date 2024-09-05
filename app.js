const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoute = require("./route/user.route");
const ticketRoute = require("./route/ticket.route");
const notifRoute = require("./route/notif.route");
const woRoute = require("./route/work_order.route");

require("dotenv").config();
const { PORT, SWAGGER_PORT } = process.env;

const app = express();
const app2 = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Welcome!");
});

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: ["./src/validation"],
      securitySchemes: {
        bearer: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearer: [],
      },
    ],
  },
  apis: ["./route/*.js"],
};

const specs = swaggerJsdoc(options);
app2.use("/", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", userRoute, ticketRoute, woRoute, notifRoute);

app.use("*", (req, res) => {
  res.json("Path not found!");
});

app.listen(PORT, () => {
  console.log("app running on port : " + PORT);
});

app2.listen(SWAGGER_PORT, () => {
  console.log("swagger running on port : " + SWAGGER_PORT);
});
