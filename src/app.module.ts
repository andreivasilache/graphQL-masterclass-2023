import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { PostModule } from './graphql/core/post/post.module';
import { UserModule } from './graphql/core/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './graphql/core/book/book.module';

@Module({
  imports: [
    // core modules
    ConfigModule.forRoot(),

    // graph ql modules
    PostModule,
    UserModule,
    BookModule,

    // mongoose modules
    MongooseModule.forRoot(process.env.MONGODB_API),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/static/schema.gql'),
      sortSchema: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
