import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { User } from './Schema/user.schema';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
