import {Request, Response, NextFunction} from 'express'
import { auth } from '../../core/interactors'
import respuesta from '../../helpers/respuesta'



const changePassword = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const {token, newPassword} = req.body
    await auth.changePassword(token, newPassword)
    return respuesta(res, true, 200, 'Contraseña cambiada')
  } catch (error) {
    next(error)
  }
}

export default changePassword
