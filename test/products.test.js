

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // supongamos que tu aplicación está en un archivo llamado app.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('Products Router', () => {
  // Test para obtener todos los productos
  it('Debería obtener todos los productos', (done) => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Test para obtener un producto específico por ID
  it('Debería obtener un producto por su ID', (done) => {
    const productId = '5ecb8d8e2c0db630e8e45563'; // ID válido de un producto existente en tu base de datos
    chai.request(app)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('price');
        // Agregar más expectativas según la estructura de tu objeto de producto
        done();
      });
  });

  // Agrega más tests según sea necesario para el router de productos
});
