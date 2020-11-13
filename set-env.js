const writeFile = require('fs').writeFile;

const envPath = './src/environments/environment.ts';
require('dotenv').config();

const env = `// This file was generated by set-env.js. To make modifications edit set-env.js.
export const environment = {
  production: false,
  beersApiUrl: '${process.env.BEERS_API_URL}'
};
`;

console.log('A previous environment.ts file may be overwritten.  The new environment.ts contains');
console.log(env);

writeFile(envPath, env, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Successfully created ${envPath}`);
   }
});
