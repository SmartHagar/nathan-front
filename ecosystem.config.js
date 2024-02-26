/** @format */

module.exports = {
  apps: [
    {
      name: "nathan",
      script: "npm run start",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      port: 3000,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
