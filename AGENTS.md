# The SPP Robotics Website
This is the repository for the SPP Robotics Website. This is the version of the site that uses 11ty.

There are two branches, `main` and `11ty`. The `main` branch contains the current site which does NOT have a build process. The `11ty` branch is an experimental new version of the website (which will become the primary version in the future) that uses 11ty and does have a build process.

This file does not have instructions on how to use the `main` version of the site. For those instructions, switch to the `main` branch and view the `AGENTS.md` file in there.

## Tech stack
* Pico CSS and Bootstrap Icons are used, with some custom CSS sprinkled in as needed (present in the `site/css/` folder)
* 11ty is used, build with `npm run build`
    * `npm run serve` runs a development server
* Most of the pages are written in Markdown, just with a lot of HTML mixed in. These pages are rendered by 11ty into regular HTML.
* Pages should be written with Markdown syntax whenever possible, only using HTML when required. Doing this reduces the difficulty for newer members of the team who don't know HTML.
* Pages are rendered to the `_site/` folder, relative to the folder that this file is in.
* Site is deployed to Cloudflare Pages using its GitHub integration
    * Building of the site is handled by Cloudflare Pages, so do not push any rendered content.
    * Cloudflare Pages will automatically deploy the site on every push unless `[CF-Pages-Skip]` is anywhere in the commit message of the latest commit.
* Cloudflare Pages deploys to https://team-5438.pages.dev, but the actual (production) site is located at https://robotics.spprep.org. There is a CNAME record at `robotics.spprep.org` that points at `team-5438.pages.dev`. There is also a bulk redirect set up from `team-5438.pages.dev` (but not any of its subdomains) to `robotics.spprep.org`. This is not the case for preview deployments (created from non-`main` branches, and are not intended for production) which are subdomains under `team-5438.pages.dev` and are not impacted by the bulk redirects.

## Some important things of note
* Do not modify or replace any human-written content unless doing so is required for maintaining site functionality.
    * Any user-visible content on a page needs to be reviewed by a human before it is published. If user-visible content on a page has changed in any way, you must request review before continuing.
    * Some things that are acceptable and unacceptable to change:
        * UNACCEPTABLE: Changing a sentence on a page, even to fix grammar or spelling.
        * ACCEPTABLE: Changing the text of a UI element, like a button, if it's misspelled.
    * If you are unsure whether a change is in violation of this guideline, request a review.
* The `tools/` folder contains a `thumbhash-maker` which will output a data URL that will be used as a placeholder for the hero images before the full image is loaded in. You can look at `site/css/hero.css` to see how to implement this. You must use it when adding a new hero image, in the same vein as the other ones in `site/css/hero.css`.
* In the `site/` folder, there is a `google231018a64ef976db.html` file. It is used to link the published site to Google Search Console. This file must not be removed and has to be present in the deployed site.
    * The same goes for the `404.html` and `_includes/base.html` in the same folder. These files serve specific purposes. `404.html` is returned by Cloudflare Pages when it encounters a 404 error, and `base.html` is used as a template that the site's pages are rendered using.
* Cloudflare Pages is used instead of Cloudflare Workers because this site uses a custom domain (via CNAME) outside Cloudflare zones, a feature that is unsupported in Cloudflare Workers.
* Large image resources, like inline photos, hero images, and the logos on the sponsors page should be stored in WebP format. The `missingtexture.png` should stay in PNG format. When converting images to WebP format, use the `cwebp` command with 80% compression. You must check if the input image has an ICC profile, and if it uses one that is not sRGB, include it with the resulting WebP file. SVG images should stay the way they are.
* Smaller image resources, like the `logo.png` (used as the favicon) should be stored as PNG. You must optimize all PNG files that are added using `optipng`.

## Beyond this file
Some documentation (intended for people with zero development experience) for this project is stored in a GitHub wiki. This documentation has not been updated for the 11ty version, so the structure and use of HTML files are completely different. Please look at it, while keeping those things in mind, as it still describes some important guidelines.

You can clone it with:
```bash
git clone https://github.com/team-5438/SPP-Robotics-Website-New.wiki.git
```