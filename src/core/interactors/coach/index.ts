import SaveCoach from "./saveCoach.interactor";
import CoachDataSource from '../../../dataSources/coach.dataSource';
import EmailNotifier from '../../../dataSources/emailNotify.datasource';



const coachRepository = new CoachDataSource()
const notifierRepository = new EmailNotifier()
export const saveCoach = new SaveCoach(coachRepository, notifierRepository)
