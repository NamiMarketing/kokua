const sass = require('sass');
const path = require('path');
const fs = require('fs');

module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Compile SCSS on before build
  eleventyConfig.on('eleventy.before', async () => {
    const result = sass.compile('src/assets/scss/main.scss', {
      sourceMap: true,
      style: 'compressed'
    });

    // Ensure _site/assets/css directory exists
    const cssDir = path.join(__dirname, '_site/assets/css');
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(cssDir, 'main.css'),
      result.css
    );
  });

  // Watch SCSS files
  eleventyConfig.addWatchTarget("src/assets/scss/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
