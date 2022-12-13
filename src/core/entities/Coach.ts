

export default interface ICoach {
  id: number,
  name: string,
  lastName: string,
  dateBirth: Date,
  status: boolean,
  login: boolean,
  recoveryToken?: string,
  createdAt?: Date,
  // deletedAt?: Date,

}

export interface CreateCoach extends Omit<ICoach, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface UpdateCoach extends Partial<CreateCoach> {}
