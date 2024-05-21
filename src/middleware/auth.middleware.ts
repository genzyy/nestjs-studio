import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

import { verifyToken, decodeToken } from '../util/auth.util'

interface CustomRequest extends Request {
  userId?: number
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization

    if (token == undefined || token == null)
      throw new Error('Access token missing.')

    if (!verifyToken(token)) throw new Error('Token invalid.')

    const payload = decodeToken(token)

    req.userId = payload.sub

    next()
  }
}
