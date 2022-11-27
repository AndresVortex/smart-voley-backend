

export default interface IUser {
  id: number,
  name: string,
  lastName: string,
  email: string,
  password: string,
  dateBirth: Date,
  roleId: number,
  status: boolean,
  login: boolean,
  recoveryToken?: string,
  createdAt?: Date,
  updatedAt?: Date,
  // deletedAt?: Date,

}

export interface CreateUser extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface UpdateUser extends Partial<CreateUser> {}
