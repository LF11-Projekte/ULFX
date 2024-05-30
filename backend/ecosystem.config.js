module.exports = {
  apps: [
    {
      script: "./build/server.js",
      name: "ULFX", // Your entry point
      instances: 1,
      max_memory_restart: "2G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
