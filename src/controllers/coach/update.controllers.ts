// import saveUser from '../core/interactors'
import {userUpdates} from '../../core/interactors'

import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import IUser from '../../core/entities/User';


const updateUser = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)

    const userUpdate = await userUpdates.handle(id, req.body)
    return respuesta(res, true, 200, 'Registro completado', userUpdate )

  } catch (error) {
    next(error)
  }
}




export default updateUser
