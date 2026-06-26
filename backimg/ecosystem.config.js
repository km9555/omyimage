// PM2 process manager config for the oMyImage backend (Contabo VPS).
// Usage: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "omyimage-backend",
      script: "dist/server.js",
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
