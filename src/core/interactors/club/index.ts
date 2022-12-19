import CreateClub from './createClub.interactor';
import ClubDataSource from '../../../dataSources/club.dataSource';

const clubRepository = new ClubDataSource()


export const createClub = new CreateClub(clubRepository)
