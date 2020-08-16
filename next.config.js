const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;

  const env = {
    SITE_NAME: "Imperium Cross Register",
    API_URI_PRO: "",
    API_URI_DEV: "http://localhost:8000/v1/api"
  };

  return {
    env,
  };
};