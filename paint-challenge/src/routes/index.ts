import express, { Router } from "express"
import { fileController } from "../presentation/controllers/file.controller"
import { paintController } from "../presentation/controllers/paint.controller"

const routes: Router = express.Router()


routes.get('/', fileController.getHome)
routes.post('/paint', paintController.calculate)

export default  routes