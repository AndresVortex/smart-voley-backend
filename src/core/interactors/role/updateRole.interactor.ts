import RoleRepository from '../../repositories/roleRepository';
import IRole from '../../entities/Role';
import { IUpdateRole } from '../../entities/Role';


export default class UpdateRole {

  constructor(private readonly roleRepository: RoleRepository){
    this.roleRepository= roleRepository
  }

  async handle(id: IRole['id'], change: IUpdateRole): Promise<IRole>{

    return this.roleRepository.update(id, change)
  }
}
