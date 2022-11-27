import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'

import { createRol } from '../../core/interactors/role/index';
const createRole = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { name, description } = req.body
    const newRol = await createRol.handle({name, description})
    return respuesta(res, true, 200, 'Creación del rol completa', newRol )

  } catch (error) {
    next(error)
  }
}

export default createRole
