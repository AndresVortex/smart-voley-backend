import User from "../../db/models/user.model";

export default interface UserRepository {
  create(user: User): Promise<User>;
  find(): Promise<User[]>;
  getByEmail(email: User['email']): Promise<User>;
  getById(id: User['id']): Promise<User>;
  update(id: User['id'], changes: Partial<User> ): Promise<User>;

}
