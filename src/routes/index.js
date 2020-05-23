const express = require("express"); // Modulo principal de Express
const cors = require("cors"); // Para evitar el Cross Origin
const helmet = require("helmet"); // Middleware para seguridad
const compression = require("compression"); // Comprimir nuestras peticiones Http
require("express-async-errors"); // Capturar las exceptions asincronas

//Our  Middleware
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = ({ HomeRoute }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());
  apiRoutes.use("/home", HomeRoute);

  router.use("/v1/api", apiRoutes);

  // Error Middleware
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
