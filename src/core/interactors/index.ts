import saveUser from "../interactors/users/saveUser.interactor";
import UpdateUsers from "../interactors/users/updateUser.interactor";
import Auth from './auth/auth.interactor';
import UserDataSource from '../../dataSources/user.datasource';
import EmailNotifier from '../../dataSources/emailNotify.datasource';
import AuthDataSource from '../../dataSources/auth.datasource';
import ListUsers from './users/getUsers.interactor';

//Repositories
export const userRepository = new UserDataSource()
const authRepository = new AuthDataSource()
const notifierRepository = new EmailNotifier()


//Interactors
export const userUpdates = new UpdateUsers(userRepository)
export const auth = new Auth(authRepository, userRepository)
export const listUser = new ListUsers(userRepository)


export default saveUser(userRepository,authRepository, notifierRepository)
