import axios from "axios";
import * as functions from "firebase-functions";
import jwt from "jsonwebtoken";

const API_KEY = functions.config().zoom.api_key;
const API_SECRET = functions.config().zoom.api_secret;

// For testing purposes, you may use these credentials
// const API_KEY = "U8E6zCpuT8W1mu1dGbaKlg";
// const API_SECRET = "lrhYoZHcYhl6lS2d3ZTSPXrlvT4hHbs1kwff";

const generateToken = () => {
  const token = jwt.sign({ iss: API_KEY }, API_SECRET, {
    expiresIn: "5m",
    noTimestamp: true,
  });
  return token;
};

export const generateZoomLink = async (request, response) => {
  // TODO: Can change to take in the inputs from your frontend
  const data = await axios.post(
    `https://api.zoom.us/v2/users/me/meetings`,
    {
      topic: "The title of your zoom meeting",
      type: 2,
      start_time: "2019-06-14T10: 21: 57",
      duration: "45",
      timezone: "Europe/Madrid",
      agenda: "test",
      recurrence: { type: 1, repeat_interval: 1 },
      settings: {
        host_video: "true",
        participant_video: "true",
        join_before_host: "False",
        mute_upon_entry: "False",
        watermark: "true",
        audio: "voip",
        auto_recording: "cloud",
      },
    },
    {
      headers: {
        authorization: `Bearer ${generateToken()}`,
      },
    }
  );

  // Most important outputs are the `join_url` and `password`
  return data;
};
