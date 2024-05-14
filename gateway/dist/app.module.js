"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const gateway_1 = require("@apollo/gateway");
const gateway_2 = require("@apollo/gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloGatewayDriver,
                gateway: {
                    supergraphSdl: new gateway_1.IntrospectAndCompose({
                        subgraphs: [
                            { name: 'users', url: 'http://127.0.0.1:3002/graphql' },
                            { name: 'product', url: 'http://localhost:3003/graphql' },
                        ],
                    }),
                    buildService({ name, url }) {
                        console.log(`Loading service: ${name} at ${url}`);
                        return new gateway_2.RemoteGraphQLDataSource({
                            url,
                        });
                    },
                },
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map