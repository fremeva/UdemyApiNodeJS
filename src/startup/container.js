const config = require("../config");
const app = require(".");
/**
 * createContainer:
 * asClass: Metodo que nos va a ayudar inyectar un objeto como una clase
 * asValue: Metodo que nos va ayudar a inyectar un objeto como un valor
 * asFunction: Metodo que nos va ayudar a inyectar un objeto como una funcion
 */
const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Services
// Importamos el Servicio Home para prueba
const { HomeService } = require("./../services");

// controllers
const { HomeController } = require("../controllers");

// Crea un contenedor
const container = createContainer();

// routes
const { HomeRoute } = require("../routes/index.routes");
const RootRouter = require("../routes");

container.register({
  app: asClass(app).singleton(),
  router: asFunction(RootRouter).singleton(),
  Config: asValue(config),
});
/**
 * // Key para identificar la inyeccion: lo que va a inyectar:
 * seria la clase del servicio y que tenga el comportamiento como singleton.
 * Siempre sea la misma instancia de la clase compartida con las diferentes modulos que requira el servicio
 */
container.register({
  HomeService: asClass(HomeService).singleton(),
}); // Para crear una nueva clase o tipo de Inyeccion.

// Registramos el controller
container.register({
  HomeController: asClass(HomeController).singleton(), // leer comentarios abajo
});
/**
 * Usamos el metodo bind, pasandole nuevament HomeController.
 * Esto se hace porque express a la hora de llamar un controller, el scope cambia,, se coloca el de express
 * hacemos esto para que el scope se mantenga.
 */

// Router Register
container.register({
  HomeRoute: asFunction(HomeRoute).singleton(), // Es una funcion ya que el modulo es una funcion constructora.
});

// exportamos el container
module.exports = container;
