import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import IUser from '../../core/entities/User';
import { listUser } from '../../core/interactors';
const getUsers = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const users = await listUser.handle()
    return respuesta(res, true, 200, 'Lista de usuarios completa', users)

  } catch (error) {
    next(error)
  }
}

export default getUsers
