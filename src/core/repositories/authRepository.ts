import IUser from '../entities/User';

export interface Payload {
  sub: number,
  role: IUser['roleId'],
}

export default interface AuthRepository {
  getUser(email: string, password: string): Promise<IUser>
  signToken(payload: Payload ): string;
  sendRecovery(email: IUser['email']): Promise<void>;
  changePassword(token: string, newPassword: IUser['password']): Promise<void>
  refreshToken(token: string): Promise<string>;
}
