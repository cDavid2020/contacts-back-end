// this is the gateway to the dabaase

import mongoose from "mongoose";
import config from "../config.js";

// Connect to the database.

// setting up config and controller and the Express server. Check to see the message. "connected to the databas"

mongoose
  .connect(config.getDbCon("contacts")) //
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

export default {
  // TODO: Get all Contacts
};

// controller is controlling access to the database/data. Mongoose is the external module (mediator, middleperson) that we use to interact w MongoDB. Mongoose is used to interface w/ MongoDB

// it needs the connection string to connect to the database from Warp

// before we were printing the whole error object ERR. now we are just printing the error message
