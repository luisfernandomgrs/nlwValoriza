import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUserService {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateUserService) {
    const usersRepository = getCustomRepository(UsersRepositories);

    /**
     * check user exists...
     */
    const user = await usersRepository.findOne({
      email
    });
    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    /**
     * check password...
     */
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    /**
     * create token...
     */
    const token = sign({
      email: user.email
    }, "8fe89604b272161f597317948f630ece", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  };
};

export { AuthenticateUserService };