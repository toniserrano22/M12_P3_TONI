
const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();


const User = require("../models/user");


//       Usuari         //

/**
 *  GET
 */

 app.get("/user", (req, res) => {
    User.find().exec((err, usuaris) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        usuaris,
      });
    });
  });

/**
 * POST
 */


 app.post("/user", (req, res) => {
    const { nom, estat, correu, password, rol, google } = req.body;
    const user = new User({
        nom,
        estat,
        correu,
        password,
        rol,
        google,
    });
  
    user.save((err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        user: userDB,
      });
    });
  });

/**
 * DELETE
 */

 app.delete("/user",(req,res) => {
    User.deleteOne({_id: req.body.id}, (err) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      };
  
      res.json({
        ok: true,
      });
    });
  })
    module.exports = app;