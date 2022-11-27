import RoleDataSource from "../../../dataSources/role.datasource";
import CreateRole from "./createRole.interactor";
import DetailRole from "./getDetailRole.interactor";
import UpdateRole from './updateRole.interactor';
import DeleteRole from './deleteRole.interactor';


const roleRepository = new RoleDataSource()


export const createRol = new CreateRole(roleRepository)
export const detailRole = new DetailRole(roleRepository)
export const updateRoles = new UpdateRole(roleRepository)
export const deleteRoles = new DeleteRole(roleRepository)
