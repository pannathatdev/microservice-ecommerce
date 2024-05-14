import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
    @Field()
    id: string;
  
    @Field()
    name: string;
  
    @Field()
    description: string;

    @Field()
    price: string;
}
