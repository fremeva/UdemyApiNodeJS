const { Router } = require("express");

// Contructor para la inyeccion de dependencia con awilix
module.exports = ({ HomeController }) => {
  const router = Router();
  /**
   * Podemos acceder a sus metodos por lo siguiente:
   * Cuando express ejecuta dicha funcion, el scope se transfiere a a la funcion es el del express, Pero como en el container
   * tenemos un bind con Homecontroller, el scope seria el de La misma clase
   */
  router.get("/", HomeController.index);

  return router;
};
