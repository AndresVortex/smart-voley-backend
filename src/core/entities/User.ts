

export default interface IUser {
  id: number,

  email: string,
  password: string,
  status: boolean,
  login: boolean,
  recoveryToken: string,
  createdAt: Date,
  // updatedAt?: Date,
  // deletedAt?: Date,

}

export interface CreateUser extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface UpdateUser extends Partial<CreateUser> {}
