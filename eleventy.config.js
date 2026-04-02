export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("site")
	eleventyConfig.addPassthroughCopy("site/css")
    eleventyConfig.addPassthroughCopy("site/files")
    eleventyConfig.addPassthroughCopy("site/img")
    eleventyConfig.addPassthroughCopy("site/js")
    eleventyConfig.addPassthroughCopy("site/google231018a64ef976db.html")
    eleventyConfig.addPassthroughCopy("site/404.html")
}