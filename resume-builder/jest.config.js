module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
};
