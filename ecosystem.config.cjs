module.exports = {
  apps: [
    {
      name: "website",
      script: "pnpm",
      args: "start",
      cwd: __dirname,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};