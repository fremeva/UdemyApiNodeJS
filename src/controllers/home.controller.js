let _homeService = null; // Esta clase no va a necesitar nada, Awilix le va a inyectar lo que ella solicite

class HomeController {
  /**
   * Como y de donde sale esto? Quien le inyecta esto HomeService?
   * Esto lo hace Awilix
   * Al momento de servirnos un Objecto de este tipo de HomeController el observa que tiene una dependencia que es el HomeServices
   * Automaticamente el lo va a Inyectar.
   * El nombre debe coincidir con la key que se registro en el contenedor
   */

  constructor({ HomeService }) {
    _homeService = HomeService; // No se usa como this, pq el servicio realmente no puede ser de la clase ya que no va ser compartido (private)
    
    // this.index = this.index.bind(this); Bind Our Methid
  }

  async index(req, res) {
    return res.send(_homeService.index());
  }
}

module.exports = HomeController;
