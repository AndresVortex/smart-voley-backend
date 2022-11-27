import IRole, { ICreateRole, IUpdateRole } from '../entities/Role';



export default interface RoleRepository {
  create(role: ICreateRole): Promise<IRole>;
  getOne(id: IRole['id']): Promise<IRole>;
  get(): Promise<IRole[]>;
  update(id: IRole['id'], change: IUpdateRole): Promise<IRole>;
  delete(id: IRole['id']): Promise<number>
}
