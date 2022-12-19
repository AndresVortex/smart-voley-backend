import StatisticsAthlete from '../../db/models/statisticsAthlete.model';

export default interface IRange  {
  id: number,
  point: number,
  desc: string,
  // statisticsAthlete: StatisticsAthlete
  createdAt?: Date,
  updatedAt?: Date,
}

export interface ICreateRange extends Omit<IRange, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface IUpdateRange extends Partial<ICreateRange> {}
