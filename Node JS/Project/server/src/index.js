import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import routes from "./routes";
import logger from "./util/logger";
import genericErrorHandler from "./middlewares/genericErrorHandler";

const server = express();

dotenv.config();

//Middlwwares
server.use(bodyParser.json());

server.use(routes);

server.use(genericErrorHandler);

server.listen(process.env.PORT, () => {
  logger.info(`Listening on port ${process.env.PORT}`);
});
