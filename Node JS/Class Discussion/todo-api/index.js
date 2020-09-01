import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import routes from "./src/routes";
import logger from "./src/utils/logger";

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  logger.info(`${method} ${url}`);

  next();
};

//euta API app jasto banayeko jasle express use garchha
//app chai aba euta express app bhayo
const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(loggingMiddleware);
app.use(routes);

//yo function ko kaam - port open bhaisakepachi chai k sisplay garne bhanera console logma aauchha
app.listen(1234, () => {
  console.log("Listening on port 1234");
});
