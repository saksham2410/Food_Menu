module.exports = {
  apps : [{
    name: 'foodMenu',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    cwd: process.cwd(),
    env: {
        COMMON_VARIABLE: 'true'
      },
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
        "PORT": process.env.FREYA_PRODUCTION_PORT,
        "NODE_ENV": "production",
        "HOST": process.env.MYSQL_URL,
        "USER": process.env.MYSQL_USERNAME,
        "PASSWORD": process.env.MYSQL_PASSWORD,
        "DATABASE": process.env.MYSQL_DATABASE,
      },
      env_staging: {
        "PORT": process.env.FREYA_PRODUCTION_PORT,
        "NODE_ENV": "production",
        "HOST": process.env.MYSQL_URL,
        "USER": process.env.MYSQL_USERNAME,
        "PASSWORD": process.env.MYSQL_PASSWORD,
        "DATABASE": process.env.MYSQL_DATABASE,
      }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
