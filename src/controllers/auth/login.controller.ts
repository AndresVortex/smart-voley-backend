// import saveUser from '../core/interactors'

import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import IUser from '../../core/entities/User';
import {auth} from '../../core/interactors'


const loginUser = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const user: any = req.user
    const data: IUser = {
      ...user.dataValues
    }
    const payload = {
      sub: data.id,
      role: data.roleId
    }

    const token = auth.generateToken(payload)
    const userLogin = await auth.changeLogin(data.id, true )

    return respuesta(res, true, 200, 'Registro completado', {user: userLogin, token} )

  } catch (error) {
    next(error)
  }
}




export default loginUser
