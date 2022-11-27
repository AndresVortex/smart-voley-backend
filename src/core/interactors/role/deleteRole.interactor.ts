import RoleRepository from '../../repositories/roleRepository';
import IRole from '../../entities/Role';


export default class DeleteRole {

  constructor(private readonly roleRepository: RoleRepository){
    this.roleRepository= roleRepository
  }

  async handle(id: IRole['id']): Promise<number>{
    return await this.roleRepository.delete(id)
  }

}
