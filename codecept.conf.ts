export const config: CodeceptJS.MainConfig = {
  name: "codeceptjs-npm-ts",
  tests: "./specs/*.spec.ts",
  output: "./output",
  plugins: {
    allure: {
      resultsDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
