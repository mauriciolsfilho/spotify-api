import express, { Request, Response } from 'express'
import cors from 'cors'
import querystring from 'querystring'
import cookieParser from 'cookie-parser'

class AuthController {

  cookieKey = 'spotify_auth_state'

  /**
   * Gera uma string aleatória com letras e números
   * @param length
   *
   */
  randomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  /**
   * Realiza a chamada para autenticação com Spotify
   *
   */
  spotifyLogin(req: Request, res: Response) {
    console.log('CLIENT_ID', process.env.CLIENT_ID)
    console.log('CLIENT_KEY', process.env.CLIENT_KEY)
    return res.status(200).json({ message: 'Your Application Running!' })
  }
}

export default new AuthController()