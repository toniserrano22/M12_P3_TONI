const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();


const Client = require('../models/client');
//        CLIENTS             //
/**
 *  GET
 */

app.get("/client", (req,res) => {
    Client.find().exec((err, clients) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            clients,
        });
    });
});

/**
 * POST
 */

 app.post("/client", (req, res) => {
    const { username, nom, cognom,correu, password, phone, adreca } = req.body;
    const client = new Client({
        username,
        nom,
        cognom,
        correu,
        password,
        phone,
        adreca,
    });
  
    client.save((err, userDB) => {
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
   * PUT
   */

app.put("/client", (req,res) => {
    const {_id,username, nom, cognom,correu, password, phone, adreca} = req.body;

    const filter = {_id: { _id}};
    const update = {
        username: `${username}`,
        nom: `${nom}`,
        cognom: `${cognom}`,
        correu: `${correu}`,
        password: `${password}`,
        phone: `${phone}`,
        adreca: `${adreca}`
    };
    Client.findOneAndUpdate(filter,update, (err) => {
        if (err) {
            return res.status(400).json({
                ok: "Hi ha hagut un error",
                err,
            });
        };

        });
        const clients = Client.find({_id: '`${_id}`'});
        res.json({
            clients
        });
    });


/**
 * DELETE
 */ 
app.delete("/client", (req,res) => {
    Client.deleteOne({_id: req.body.id}, (err) => {
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