import path from 'path';
import { mergeGraphqlSchemas } from 'merge-graphql-schemas';

const schema = mergeGraphqlSchemas(path.join(__dirname, '../graphql'));

export default schema
