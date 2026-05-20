const controller = require('../controllers/faturas')

module.exports = (app) => {
  app.get('/faturas', controller.getFaturas)
  app.post('/faturas', controller.createFatura)
  app.patch('/faturas/:id', controller.updateFatura)
  app.delete('/faturas/:id', controller.deleteFatura)
}