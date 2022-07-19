import * as functions from "firebase-functions";

import zoomCommand from "./zoom.js";

export const onZoomCommand = functions.https.onRequest(zoomCommand);
