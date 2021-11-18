const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let clientSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "el username es obligatori"],
    },
    nom: {
        type: String,
        required: [true, "El nom es obligatori"],
    },
    cognom: {
        type: String, 
        required: [true, "El cognom es obligatori"],
    },
    correu: {
        type: String,
        unique: true,
        required: [true, "El correu electrònic és obligatori"],
    },
    password: {
        type: String,
        required: [true, "La contrasenya és obligatoria"],
    },
    phone: {
        type: Number,
        required: [true, "El tlèfon és obligatori"],
    },
    adreca: {
        type: String,
        required: [true, "La adreça és obligatoria"],
    }
});

clientSchema.methods.toJson = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
};

clientSchema.plugin(uniqueValidator, {message: "{PATH} debe ser unico"});

module.exports = mongoose.model("Client",clientSchema);