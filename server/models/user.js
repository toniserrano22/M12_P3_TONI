const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

const UsuariSchema = Schema({
    nom: {
      type: String,
      required: [true, "El nom és obligatori"],
    },
    correu: {
      type: String,
      required: [true, "El correu és obligatori"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contrasenya és obligatoria"],
    },
    rol: {
      type: String,
      required: true,
      enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    estat: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
  });

  UsuariSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
  };
  
  UsuariSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });
  
  module.exports = mongoose.model("Usuari", UsuariSchema);