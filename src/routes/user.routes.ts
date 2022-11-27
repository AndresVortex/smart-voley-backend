import { Router } from 'express'
import passport from 'passport'
import getUsers from '../controllers/users/getUsers.controller'
import registerUser from '../controllers/users/register.controller'
import updateUser from '../controllers/users/update.controllers'
import validatorSession from '../middlewares/validate.sesion'
import validatorHandler from '../middlewares/validator.handler'
import { changeStatusUserSchema, createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema'
import { userRepository } from '../core/interactors/index';
import { checkRoles } from '../middlewares/auth.handler'
import { roles } from '../config'

const router = Router()

//Ruta para registrar usuarios
router.post('/register',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createUserSchema, 'body'),
  registerUser
)

//Ruta para editar usuarios
router.put('/edit/:id',
  passport.authenticate('jwt', { session: false }),
  validatorSession(userRepository),
  checkRoles(roles.admin),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
)

//Ruta para listar usuarios
router.get('/list', getUsers)


//Ruta pra deshabilitar usuarios
router.put('/change-status/:id',
  passport.authenticate('jwt', {session: false} ),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(changeStatusUserSchema, 'body'),
  updateUser
)



export default router


