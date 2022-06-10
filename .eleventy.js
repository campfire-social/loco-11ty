const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["webp", "jpg", "png"],
    outputDir: "./src/assets/images",
    urlPath: "/assets/images/"

  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
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