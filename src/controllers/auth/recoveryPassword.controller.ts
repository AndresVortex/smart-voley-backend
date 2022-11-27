import {Request, Response, NextFunction} from 'express'
import { auth } from '../../core/interactors'
import respuesta from '../../helpers/respuesta'



const recoveryPassword = async(req: Request, res: Response, next: NextFunction) => {
  try {

    const {email} = req.body
    await auth.recovery(email)
    return respuesta(res, true, 200, 'Correo enviado',{} )
  } catch (error) {
    next()
  }
}
export default  recoveryPassword
