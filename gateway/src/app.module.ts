import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloGatewayDriver,
  ApolloGatewayDriverConfig,
} from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { RemoteGraphQLDataSource } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://127.0.0.1:3002/graphql' },
            { name: 'product', url: 'http://localhost:3003/graphql' },
          ],
        }),
        buildService({ name, url }) {
          console.log(`Loading service: ${name} at ${url}`);
          return new RemoteGraphQLDataSource({
            url,
          });
        },
      },
    }),
  ],
})
export class AppModule {}

