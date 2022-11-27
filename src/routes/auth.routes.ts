import { Router } from 'express'
import passport from 'passport'

import Login from '../controllers/auth/login.controller'
import logOut from '../controllers/auth/logout.controller'
import recoveryPassword from '../controllers/auth/recoveryPassword.controller'
import validatorHandler from '../middlewares/validator.handler';
import { recoveryPassSchema, changePasswordSchema } from '../schemas/auth.schema';
import changePassword from '../controllers/auth/changePassword.controller';
import refreshToken from '../controllers/auth/refreshToken.controller'


const router = Router()


// Ruta para iniciar sesión
router.post('/login',
  passport.authenticate('local', {session: false}),
  Login
)


//Ruta para cerrar sesión
router.get('/logout', passport.authenticate('jwt', { session: false }), logOut)

//Ruta para recuperar contraseña (envio de correo)
router.post('/recovery', validatorHandler(recoveryPassSchema, 'body'), recoveryPassword )


//Ruta para cambiar la contraseña
router.post('/change-password', validatorHandler(changePasswordSchema, 'body'), changePassword)


//Ruta para refrescar token
router.get('/refresh-token', passport.authenticate('jwt', {session: false} ), refreshToken )

export default router


