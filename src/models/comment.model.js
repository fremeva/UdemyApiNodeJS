const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  description: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true,
  },
});
/**
 * Plugins
 * Antes de exportar el modelo es buena practica Configurar los Plugins
 *
 * Que son metodos que le dan mas poder a Mongoose, ejemplo: autopotulate
 * que nos permiten hacer populate de forma automaticamente.
 * No siempre es recomendaable debido que es costoso para las consultas
 */

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("comment", CommentSchema);
