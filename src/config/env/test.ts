class Config {
  env: string;
  PORT: number;
  API_BASE: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE: string;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  JWT_SECRET: string;
  COOKIE_SECURE: boolean;
  COOKIE_SAME_SITE: string;
  PUBLIC_ROUTES: string[];
  CLIENT_URL: string;

  constructor () {
    this.env = 'test'
    this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
    this.API_BASE = '/api';
    this.DATABASE_HOST = 'localhost';
    this.DATABASE_PORT = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5432;
    this.DATABASE = process.env.DATABASE || 'school_test'
    this.DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'postgres'
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
    this.JWT_SECRET = 'HZADgA9ttB$S!dy!hu3Rauvg!L27'
    this.COOKIE_SECURE = false
    this.COOKIE_SAME_SITE = 'None'
    this.PUBLIC_ROUTES = ['/', '/api/auth/signup', '/api/auth/signin']
    this.CLIENT_URL = '*'
  }
}

export default Config;