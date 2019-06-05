module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "FOOD",
      script: "index.js",
      cwd: process.cwd(),
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
          "PORT": process.env.FOOD_PRODUCTION_PORT,
          NODE_ENV: "production",
          HOST: process.env.FOOD_MYSQL_URL_HOST,
          USER: process.env.FOOD_MYSQL_USERNAME_USER,
          PASSWORD: process.env.FOOD_MYSQL_PASSWORD,
          DATABASE: process.env.FOOD_MYSQL_DATABASE
      },
      env_staging: {
          "PORT": process.env.FOOD_PRODUCTION_PORT,
          NODE_ENV: "production",
          HOST: process.env.FOOD_MYSQL_URL_HOST,
          USER: process.env.FOOD_MYSQL_USERNAME_USER,
          PASSWORD: process.env.FOOD_MYSQL_PASSWORD,
          DATABASE: process.env.FOOD_MYSQL_DATABASE
      }
    }
  ]
};
