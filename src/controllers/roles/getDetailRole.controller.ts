import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'

import { detailRole } from '../../core/interactors/role/index';
const getDetailRole = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const id  = parseInt(req.params.id)
    const role = await detailRole.handle(id)
    return respuesta(res, true, 200, 'Detalle del role', role )

  } catch (error) {
    next(error)
  }
}

export default getDetailRole
