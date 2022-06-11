const Image = require("@11ty/eleventy-img");

function imageShortcode(src, cls, alt, sizes, widths) {
    let options = {
      widths: widths,
      formats: ['jpeg', 'webp'],
    };
  
    // generate images, while this is async we don’t wait
    Image(src, options);
  
    let imageAttributes = {
      class: cls,
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
  }

module.exports = function (config) {

    config.setDataDeepMerge(true);
    
    config.setLiquidOptions({
        dynamicPartials: true 
    });

    config.setBrowserSyncConfig({
		files: './dist/assets/styles/**/*.css'
	});

    config.addPassthroughCopy({
        "./src/favicon" : "favicon",
        "./src/fonts" : "assets/fonts",
        "./src/images" : "assets/images",
        "./src/css" : "assets/styles"
    });

    config.addNunjucksAsyncShortcode("image", imageShortcode);
    config.addLiquidShortcode("image", imageShortcode);
    config.addJavaScriptFunction("image", imageShortcode);

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