module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/styles.scss";`
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [
            { removeDimensions: true },
            { removeUselessStrokeAndFill: true },
            { removeViewBox: false }
          ]
        }
      });
  }
};
