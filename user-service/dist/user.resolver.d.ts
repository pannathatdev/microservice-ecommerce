import { UserService } from './user/user.service';
import { CreateUserDto } from './user/create-user.dto';
import { User } from './user/Schema/user.schema';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
