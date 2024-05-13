import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user/user.service';
import { CreateUserDto } from './user/create-user.dto';
import { User } from './user/Schema/user.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('input') createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
