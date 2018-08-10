import express from 'express'
import utils from '../utils'
import project from '../services/project'


let router = express.Router()

router
  .get('/', (req, res, next) => {
    utils.customPromise(project.getList(req.body), res, next)
  })
  .get('/:id', (req, res, next) => {
    utils.customPromise(project.getDetail(req.params.id), res, next)
  })
  .post('/', (req, res, next) => {
    utils.customPromise(project.add(req.body), res, next)
  })
  .put('/:id', (req, res, next) => {
    utils.customPromise(project.update(req.body, req.params.id), res, next)
  })
  .delete('/:id', (req, res, next) => {
    utils.customPromise(project.delete(req.params.id), res, next)
  })


export default router