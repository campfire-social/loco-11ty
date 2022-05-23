module.exports = function (config) {

    config.setDataDeepMerge(true);
    
    config.setLiquidOptions({
        dynamicPartials: true 
    });

    config.addPassthroughCopy({
        "./src/favicon" : "favicon",
    });

    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "includes",
        data: "data"
      },
      passthroughFileCopy: true,
      templateFormats: ["liquid", "html", "md"],
      htmlTemplateEngine: "liquid", 
      markdownTemplateEngine: "liquid",
    };
  };