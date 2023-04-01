import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  path: join(process.cwd(), 'src/graphql/static/graphql.ts'),
  typePaths: ['./src/graphql/*.graphql'],
  watch: true,
  emitTypenameField: true,
});
