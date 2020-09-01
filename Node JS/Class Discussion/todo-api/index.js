//http import garya jastai express import garya
import express from "express";

import bodyParser from "body-parser";
// const { request, response } = require("express");

import routes from "./src/routes";

//euta API app jasto banayeko jasle express use garchha
//app chai aba euat express app bhayo
const app = express();

app.use(bodyParser.json());
app.use(routes);

//yo function ko kaam - port open bhaisakepachi chai k sisplay garne bhanera console logma aauchha
app.listen(1234, () => {
  console.log("Listening on port 1234");
});
