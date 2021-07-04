import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);
    let users = await usersRepositories.find();

    /*
    // ocultando propriedades de forma personalizada sem o uso da
    // class-tranformer
    let usersCustomList = users.map((user) => ({
      name: user.name,
      email: user.email,
      created_at: user.created_at
    }));

    return usersCustomList;
    */

    return classToPlain(users);
  };
};

export { ListUsersService };