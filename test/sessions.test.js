const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Sessions Router', () => {
  // Test para iniciar sesión
  it('Debería iniciar sesión con credenciales válidas', (done) => {
    chai.request(app)
      .post('/api/sessions/login')
      .send({ username: 'usuario', password: 'contraseña' }) // Aquí debes proporcionar credenciales válidas
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Agregar más expectativas según lo que esperas obtener al iniciar sesión
        done();
      });
  });

  // Test para cerrar sesión
  it('Debería cerrar sesión', (done) => {
    chai.request(app)
      .post('/api/sessions/logout')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Agregar más expectativas según lo que esperas obtener al cerrar sesión
        done();
      });
  });

  // Agrega más tests según sea necesario para el router de sesiones
});
