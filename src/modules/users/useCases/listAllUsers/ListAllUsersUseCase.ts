import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log("user_id", user_id);
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    if (!user.admin) {
      throw new Error("Action not alowed to the user.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
