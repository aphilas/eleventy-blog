module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {
    return posts.filter(post => post.data.author === author)
  })

  eleventyConfig.addPassthroughCopy("admin")
  
  eleventyConfig.setTemplateFormats([
     "liquid", "md", "css", "jpg", "png", "webp" 
  ])
}