module.exports = function(eleventyConfig) {
  // Copy the `img/` directory 
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
};

