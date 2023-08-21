import Config from "./env/development";

// const config = require(`./env/${process.env.NODE_ENV || 'development'}.js`)
const config = new Config();
export default config;