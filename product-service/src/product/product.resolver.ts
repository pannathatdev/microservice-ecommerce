import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from './Schema/product.schema';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createUser(@Args('input') CreateProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(CreateProductDto);
  }
}

