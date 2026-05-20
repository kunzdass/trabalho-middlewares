const service = require('../services/faturas')

async function getFaturas (req, res) {
  try {
    const faturas = await service.getFaturas()
    return res.status(200).json({
      status: 'ok',
      data: faturas
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

async function createFatura (req, res) {
  try {
    const fatura = await service.createFatura(req.body)
    return res.status(201).json({
      status: 'ok',
      message: 'Fatura cadastrada com sucesso',
      data: fatura
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

async function updateFatura (req, res) {
  try {
    const params = {
      ...req.body,
      id: req.params.id
    }
    const fatura = await service.updateFatura(params)
    return res.status(200).json({
      status: 'ok',
      message: 'Fatura atualizada com sucesso',
      data: fatura
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

async function deleteFatura (req, res) {
  try {
    await service.deleteFatura(req.params)
    return res.status(204).send()
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

module.exports = {
  getFaturas,
  createFatura,
  updateFatura,
  deleteFatura
}