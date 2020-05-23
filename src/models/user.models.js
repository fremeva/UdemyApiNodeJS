const mongoose = require("mongoose");
const { Schema } = mongoose; // Para construir el Esquema del modelo
/**
 *  bcryptjs: Para la encriptacion de nuestras contrase;a
 *
 *  compareSync --> Nos ayuda a comparar las contrase;as entre la mandada por request con la que esta guardada en la db
 *  hashSync: Para crear la contrase;a encriptada del usuario
 *  genSaltSync: Para generar un salto que sera aplicada en el momento de crear el hash
 */
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

/**
 * Metodos Mongoose
 */
UserSchema.methods.toJSON = function () {
  let user = this.Object();
  delete user.password;
  return user;
};

UserSchema.methods.comparePassword = function (password) {
  return compareSync(password, this.password);
};

/**
 * Hooks
 * pre save --> antes de hacer el guardado sera ejecutado dicha logica 
 * que se encuentra en la funcion
 */
// Debe ser una funcion normal para que tenga el scope de mongoose y no el global
UserSchema.pre("save", async function (next) {
  const user = this; // Corresponde al elemento que se esta tratando en cuestion (El usuario a Guardar)
  if (!user.isModified("password")) return next();

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
