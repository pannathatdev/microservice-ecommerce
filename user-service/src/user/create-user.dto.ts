import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
    @Field()
    id: string;
  
    @Field()
    email: string;
  
    @Field()
    password: string;
}
