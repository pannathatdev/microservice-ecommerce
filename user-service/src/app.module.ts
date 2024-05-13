import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { GraphQLModule, GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql'; // เพิ่ม GqlOptionsFactory และ GqlModuleOptions
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserSchema, User } from './user/Schema/user.schema';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      }
    }),
    MongooseModule.forRoot('mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/microservices'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class AppModule {}
