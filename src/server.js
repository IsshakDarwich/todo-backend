const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const server = require("http").Server(app);

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(require("./routes/task_routes"));

server.listen(process.env.PORT || 4200);

