import * as thumbHash from "thumbhash"
import sharp from "sharp"
import webp from "webp-converter"
import fs from "node:fs"
import path from "node:path"
import chalk from "chalk"

const scriptDirectory = import.meta.dirname
console.log(`Script directory (import.meta.dirname) is ${chalk.blueBright(scriptDirectory)}`)
const tempDirectory = path.join(scriptDirectory, "temp")
console.log(`Temp directory is ${chalk.blueBright(tempDirectory)}`)

if ( !fs.existsSync(tempDirectory) ) {
    fs.mkdirSync(tempDirectory)
}

if ( !fs.lstatSync(tempDirectory).isDirectory() ) {
    console.error(`Error! "${tempDirectory}" exists but isn't a directory.\nYou'll have to fix this yourself.`)
    process.exit(1)
}

async function generateThumbHash(imagePath) {  
    const MAX_SIZE = 100

    // Resize the image to fit within 100x100 pixels while maintaining aspect ratio
    console.log(chalk.cyan("Resizing image..."))
    const resizedImagePNGBuffer = await sharp(imagePath).resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside" }).png().ensureAlpha().toBuffer()
    console.log(chalk.cyan("Converting PNG buffer to RGBA buffer..."))
    const resizedImageRawBuffer = await sharp(resizedImagePNGBuffer).raw().toBuffer()

    const { width, height } = await sharp(resizedImagePNGBuffer).metadata()
    console.log(`${chalk.cyan("Width:")} ${chalk.magentaBright(width)}\n${chalk.cyan("Height:")} ${chalk.magentaBright(height)}`)
    
    // Encode the image to a ThumbHash
    console.log(chalk.cyan("Converting RGBA buffer to ThumbHash..."))
    const hash = thumbHash.rgbaToThumbHash(width, height, new Float32Array(resizedImageRawBuffer))

    const hashURLInitial = thumbHash.thumbHashToDataURL(hash)
    console.log(chalk.cyan(`hashURLInitial is "${chalk.magentaBright(hashURLInitial)}"`))

    console.log(chalk.cyan(`Extracting PNG Base64 from hashURLInitial...`))
    const hashPNGBase64 = hashURLInitial.replace(/^(data\:image\/png\;base64\,)/, "")
    console.log(chalk.cyan(`hashPNGBase64 is "${chalk.magentaBright(hashPNGBase64)}"`))
    console.log(chalk.cyan(`Converting PNG hash Base64 to PNG hash buffer...`))
    const hashPNGBuffer = Buffer.from(atob(hashPNGBase64), "binary")

    console.log(chalk.cyan(`Converting PNG hash buffer to WebP hash buffer...`))
    const hashWebpBuffer = await webp.buffer2webpbuffer(hashPNGBuffer, "png", "-q 80", tempDirectory)
    console.log(chalk.cyan(`Converting WebP hash buffer to WebP Base64...`))
    const hashWebpBase64 = hashWebpBuffer.toString("base64")
    console.log(chalk.cyan(`hashWebpBase64 is "${chalk.magentaBright(hashWebpBase64)}"`))

    console.log(chalk.cyan(`Constructing WebP Base64 (Final) URL...`))
    const hashURLFinal = `data:image/webp;base64,${hashWebpBase64}`

    console.log(chalk.underline("All done!"))
    console.log("ThumbHash:", chalk.greenBright(hashURLFinal)) // Output the ThumbHash as Base64
}

if (process.argv[2] === undefined) {
    console.error("Image file not specified.")
    console.log(`Usage: ${import.meta.filename} (path to image file)`)
    process.exit(1)
}

if (process.argv[3] !== undefined) {
    console.error("Only 1 argument is allowed, but you passed more than that.")
    console.log(`Usage: (node|deno|bun) ${path.posix.basename(import.meta.filename)} (path to image file)`)
    process.exit(1)
}

console.log(`Path to image file (process.argv[2]) is ${chalk.blueBright(process.argv[2])}`)
generateThumbHash(process.argv[2])