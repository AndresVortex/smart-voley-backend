
export default interface IActionType  {
  id: number,
  name: string,
  desc: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface ICreateActionType extends Omit<IActionType, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface IUpdateActionType extends Partial<ICreateActionType> {}
