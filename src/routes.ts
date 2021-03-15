import express, { Request, Response } from 'express'
import AuthController from '@controllers/AuthController'

const router = express.Router()

router.get('/', AuthController.spotifyLogin)  

export default router