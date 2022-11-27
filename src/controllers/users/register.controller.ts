
import saveUser from '../../core/interactors'
import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'


const registerUser = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req

    const user = await saveUser(body)

    return respuesta(res, true, 200, 'Registro completado', user)

  } catch (error) {
    next(error)
  }
}

export default registerUser
