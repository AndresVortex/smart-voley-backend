import RoleRepository from '../../repositories/roleRepository';
import IRole from '../../entities/Role';


export default class DetailRole {
  constructor(private readonly roleRepository: RoleRepository){
    this.roleRepository = roleRepository
  }

  async handle(id: IRole['id']): Promise<IRole>{

    const role = await this.roleRepository.getOne(id)

    return role
  }
}
