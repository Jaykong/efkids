module.exports = {
  apps : [{
    name: 'efkids',
      script    : 'npm',
      args      : 'run start:production',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

 deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-17-39-61.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/home.pem",
      ref: "origin/master",
      repo: "git@github.com:Jaykong/efkids.git",
      path: "/home/ubuntu/efkids",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};