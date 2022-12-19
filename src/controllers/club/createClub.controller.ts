



import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import { createClub } from '../../core/interactors/club/index';


const createClubController = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const club = req.body

    const clubDb = await createClub.handle(club)

    return respuesta(res, true, 200, 'Creación exitosa', clubDb)

  } catch (error) {
    next(error)
  }
}

export default createClubController
