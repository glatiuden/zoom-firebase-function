import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateZoomLink } from "./utilities/zoom.js";
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post("/", urlencodedParser, async (request, response) => {
  const { text } = request.body; // TODO: Take in input here
  return generateZoomLink(request, response);
});

export default app;
