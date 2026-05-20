const controller = require('../controllers/vendas')

module.exports = (app) => {
  app.get('/vendas', controller.getVendas)
  app.post('/vendas', controller.createVenda)
  app.patch('/vendas/:id', controller.updateVenda)
  app.delete('/vendas/:id', controller.deleteVenda)
}