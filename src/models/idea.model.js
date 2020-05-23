const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  description: { type: String },
  upvotes: [{ type: Boolean }],
  downvotes: [{ type: Boolean }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true, // Esto para que funciones se debe instalar el paquete--> npm i mongoose-autopopulate (Mirar el Plugin Commentario)
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      require: true,
      autopopulate: true,
    },
  ],
});

/**
 * Plugins
 * Antes de exportar el modelo es buena practica Configurar los Plugins
 *
 * Que son metodos que le dan mas poder a Mongoose, ejemplo: autopotulate
 * que nos permiten hacer populate de forma automaticamente.
 * No siempre es recomendaable debido que es costoso para las consultas
 */

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("idea", IdeaSchema);
