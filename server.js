const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const request = require("request");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const mongouid = process.env.MONGO_DB_USER_ID;
const mongopass = process.env.MONGO_DB_PASS;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${mongouid}:${mongopass}@cluster0.2ieu9.mongodb.net/BeHealthy`,
  {
    useNewUrlParser: true,
  }
);

const usersSchema = {
  name: String,
  email: String,
};

const User = mongoose.model("User", usersSchema);

// Our database
let DB = [];

/**
 *  This function is used verify a google account
 */
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
console.log(GOOGLE_CLIENT_ID);
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: "Invalid user detected. Please try again" };
  }
}

let items = [];

let db = new sqlite3.Database(
  "C:/sqlite/db/doc_db.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the doctors SQlite database.");
  }
);

app.get("/doc", (req, res) => {
  const area = req.query.area.toLowerCase();
  console.log(area);
  db.all(
    `SELECT ID as id, Doc_Name as name, Area as area, Speciality as spec FROM BookCopy where LOWER(area)="${area}"`,
    [],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json(row);
    }
  );
});

app.get("/", (req, res) => {
  const area = req.query.area;
  console.log(area);
  db.all(
    `SELECT ID as id, Doc_Name as name, Area as area, Speciality as spec FROM BookCopy`,
    [],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json(row);
    }
  );
  // db.close((err) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   console.log("Close the doc database connection.");
  // });
});

app.get("/home", function (req, res) {
  request("http://127.0.0.1:8080/flask", function (error, response, body) {
    console.error("error:", error); // Print the error
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the data received
    res.send(body); //Display the response on the website
  });
});

//signup process

app.post("/signup", async (req, res) => {
  try {
    // console.log({ verified: verifyGoogleToken(req.body.credential) });
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);

      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;

      DB.push(profile);

      const user = new User({
        name: profile.name,
        email: profile.email,
      });
      user.save();

      res.status(201).json({
        message: "Signup was successful",
        user: {
          firstName: profile.given_name,
          lastName: profile.family_name,
          picture: profile.picture,
          email: profile.email,
          token: jwt.sign({ email: profile.email }, "myScret", {
            expiresIn: "1d",
          }),
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occured. Registration failed.",
    });
  }
});

//login process

app.post("/login", async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;

      async function findUser() {
        const foundUser = await User.findOne({ email: profile.email });
        console.log(foundUser);
        if (foundUser) {
          res.status(201).json({
            message: "Login was successful",
            user: {
              firstName: profile?.given_name,
              lastName: profile?.family_name,
              picture: profile?.picture,
              email: profile?.email,
              token: jwt.sign({ email: profile?.email }, "myScret", {
                expiresIn: "1d",
              }),
            },
          });
        } else {
          return res.status(400).json({
            message: "You are not registered. Please sign up",
          });
        }
      }

      findUser();
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
