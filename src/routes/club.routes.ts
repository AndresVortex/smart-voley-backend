import { Router } from 'express'
import validatorHandler from '../middlewares/validator.handler';
import { createClubSchema } from '../schemas/club.schema';
import createClubController from '../controllers/club/createClub.controller';



const router = Router()

router.post('/create', validatorHandler(createClubSchema, 'body'), createClubController)


export default router


