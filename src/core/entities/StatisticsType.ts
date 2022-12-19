

export default interface IStatisticsType  {
  id: number,
  name: string,
  desc: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface ICreateStatisticsType extends Omit<IStatisticsType, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface IUpdateStatisticsType extends Partial<ICreateStatisticsType> {}
