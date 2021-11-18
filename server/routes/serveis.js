const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();

const Servei = require('../models/servei');

//      Serveis       //

/**
 *  GET
 */

 app.get("/servei", (req,res) => {
    Servei.find().exec((err, serveis) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            serveis,
        });
    });
});



module.exports = app;