import jwt, { Algorithm } from 'jsonwebtoken'
import { DateTime } from 'luxon'

const JWT_SECRET: string = process.env.JWT_SECRET
const JWT_ALGORITHM: Algorithm = process.env.JWT_ALGORITHM as Algorithm
const DEFAULT_EXPIRY: number = DateTime.now().plus({ days: 1 }).toUnixInteger()

export class TokenPayload {
  sub: number
  iat: number
  exp: number = DEFAULT_EXPIRY
}

export const encodeAuthToken = (payload: TokenPayload): string => {
  if (!JWT_SECRET) throw new Error('JWT secret missing!')

  return jwt.sign(payload, JWT_SECRET, {
    algorithm: JWT_ALGORITHM,
  })
}

export const verifyToken = (token: string): boolean => {
  const payload = jwt.verify(token, JWT_SECRET, {
    algorithms: [JWT_ALGORITHM],
  })

  return payload.sub != undefined && payload.sub != null
}

export const decodeToken = (token: string): TokenPayload => {
  return jwt.decode(token) as unknown as TokenPayload
}
