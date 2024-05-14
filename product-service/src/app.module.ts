import { Module } from '@nestjs/common';
import { GraphQLModule, GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { Product,ProductSchema } from './product/Schema/product.schema';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // import ApolloDriver และ ApolloDriverConfig มาใช้งาน

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ // กำหนด driver ให้เป็น ApolloDriver
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot("mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/microservices"),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ProductModule,
  ],
  controllers: [],
  providers: [ProductService],
})
export class AppModule {}
