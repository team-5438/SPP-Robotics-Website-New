# Super amazing thumbhash maker
This is a nodejs script that builds [thumbhash](https://github.com/evanw/thumbhash) images, which are used as placeholders for the header images.

## Dependencies
>This script has only been tested on  __Node.js 23.x__ and __Bun 1.2.0__. Other versions and runtimes might work, but haven't been tested.

To install dependenies, use these commands:
```
# Using bun (preferred)
bun install

# Using npm (slower, but doesn't require bun)
npm install
```

## Usage
```
(node|deno|bun) thumbhash-maker.js (path to image file)
```

### Examples
> As I mentioned previously, I didn't test using Deno, but it probably still works so I'm keeping it here.
```
bun thumbhash-maker.js /my/amazing/folder/image.png

node thumbhash-maker.js /another/amazing/folder/image.webp

deno thumbhash-maker.js C:/my/amazing/folder/on/windows.jpg
```