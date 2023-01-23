// this is the gateway to the dabaase

import mongoose from "mongoose";
import config from "../config.js";

// COnne to the database.

// setting up config and controller and the Express server. Check to see the message. "connected to the databas"

mongoose
  .connect(config.getDbCon("contacts"))
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

export default {
  // TODO: Get all Contacts
};
