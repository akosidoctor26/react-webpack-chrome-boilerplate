import development from './development.json';
import production from './production.json';

// Is Dev?
console.log(process.env.NODE_ENV === 'development');

const env = process.env.NODE_ENV;
const config = env === 'production' ? production : development;
export default config;
