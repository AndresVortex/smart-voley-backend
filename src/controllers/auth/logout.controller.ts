// import saveUser from '../core/interactors'
import { userUpdates} from '../../core/interactors'

import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'


const logOut = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const user: any = req.user


    await userUpdates.handle(user.sub, {login: false})

    return respuesta(res, true, 200, 'Logout exitoso', {} )

  } catch (error) {
    next(error)
  }
}




export default logOut
