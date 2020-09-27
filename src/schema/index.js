const fs = require('fs');
const path = require('path');

let schema = '';
[
  './query.graphql',
  './enum.graphql',
].map(gplStringLiteral => {
  const dir = path.resolve(__dirname, gplStringLiteral);
  const str = fs.readFileSync(dir, {encoding: 'utf-8'});
  schema += str + '\n';
});

module.exports = schema;
// export default schema;
