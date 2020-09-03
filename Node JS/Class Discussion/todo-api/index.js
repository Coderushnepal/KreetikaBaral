import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import routes from "./src/routes";
import logger from "./src/utils/logger";
import genericErrorHandler from "./src/middlewares/genericErrorHandler";

const appPort = 8848;

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
app.use(genericErrorHandler); //lastma lyayera rakheko ho -- sabbai error haru aayera accululate hune yei ho

//yo function ko kaam - port open bhaisakepachi chai k sisplay garne bhanera console logma aauchha
app.listen(appPort, () => {
  console.log(`Listening on port ${appPort}`);
});
