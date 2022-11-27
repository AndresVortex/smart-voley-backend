import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'

import { deleteRoles } from '../../core/interactors/role/index';
const deleteRole = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const id= parseInt(req.params.id)
    const deleteRole = await deleteRoles.handle(id)
    return respuesta(res, true, 200, 'Creación del rol completa', deleteRole )

  } catch (error) {
    next(error)
  }
}

export default deleteRole
