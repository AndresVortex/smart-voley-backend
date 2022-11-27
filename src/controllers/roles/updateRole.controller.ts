import {Request, Response, NextFunction} from 'express'
import { updateRoles } from '../../core/interactors/role/index';
import respuesta from '../../helpers/respuesta'

const updateRole = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const change = req.body

    const id = parseInt(req.params.id)
    const newRol = await updateRoles.handle(id, change)

    return respuesta(res, true, 200, 'Actualización del rol completa', newRol )

  } catch (error) {
    next(error)
  }
}

export default updateRole
