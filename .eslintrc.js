module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    ANT_DESIGN_TOKEN: true,
    MY_SECRET: true,
    page: true,
  },
};
