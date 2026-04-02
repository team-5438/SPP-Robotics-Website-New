# The (new new) SPP Robotics Page
I was tasked with making the new SPP Robotics website, but it felt too hard for me and others to maintain. So here's the new new one, built with [Pico CSS](https://picocss.com/).

## How do I use it?
Pushes to the `main` branch are automatically published to Cloudflare Pages through its GitHub integration. Editing most parts of the site is easiest on a real computer (not a Chromebook).

1. Clone the repo to your computer
```bash
git clone https://github.com/team-5438/SPP-Robotics-Website-New.git
cd SPP-Robotics-Website-New
```
2. Install dependencies
```bash
npm install
```
3. Build the site, or run a dev server:
```bash
# This command builds the site and puts it in _site
npm run build

# This command builds the site and then runs a dev server from _site
npm run serve
```
## License
MIT