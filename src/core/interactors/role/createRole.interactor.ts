import RoleRepository from '../../repositories/roleRepository';
import { ICreateRole } from '../../entities/Role';
import IRole from '../../entities/Role';

export default class CreateRole {

  constructor(private readonly roleRepository: RoleRepository) {
    this.roleRepository = roleRepository
  }

  async handle(role: ICreateRole): Promise<IRole>{

    const newRole = await this.roleRepository.create(role)
    return newRole
  }
}
