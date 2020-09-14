module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {
    return posts.filter(post => post.data.author === author)
  })
}