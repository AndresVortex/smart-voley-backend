
import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import { saveCoach } from '../../core/interactors/coach/index';


const registerCoach = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req

    const coach = await saveCoach.handle(body)

    return respuesta(res, true, 200, 'Registro completado', coach)

  } catch (error) {
    next(error)
  }
}

export default registerCoach
