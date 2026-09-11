# Awais Ali Shah, portfolio site

Static site. No build step, no dependencies, no framework. Open `index.html` in a browser to preview locally.

## Files

```
index.html          Home
work.html           All four case studies plus client campaigns and brand development
capabilities.html   What you can own, grouped into six areas
about.html          Background and track record
contact.html        Contact details and fit criteria
assets/css/site.css All styling, design tokens at the top of the file
assets/js/site.js   Before/after comparison sliders
assets/img/         42 screenshots, compressed and renamed
assets/favicon.svg
```

## Publishing it

The site is live on GitHub Pages at
**https://awaisshahist110-lab.github.io/Awais-Ali-Shah-Marketing-Portfolio/**

`.github/workflows/deploy-pages.yml` publishes it. Every push to the deployment
branch uploads the repository root as a Pages artifact and deploys it, so there
is nothing to build and nothing to upload by hand. To update the live site, edit
the HTML or CSS, commit, push. The workflow takes about a minute.

`.nojekyll` is in the root so Pages serves the files as they are instead of
running them through Jekyll.

**One-time setup.** Pages has to be switched on by hand once: repository
Settings, Pages, Source, pick **GitHub Actions**. The workflow cannot do this
for itself, because creating a Pages site needs repository admin rights and the
Actions token is never granted those. After that one change every push deploys.

**Custom domain.** Buy the domain, add a `CNAME` file in the repository root
containing just the domain, then point the DNS at GitHub Pages: four `A` records
for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153`), or a `CNAME` record for `www` pointing at
`awaisshahist110-lab.github.io`. Then Settings, Pages, Custom domain, and tick
Enforce HTTPS once the certificate is issued. `awaisalishah.com` if it is free.

## Things to change before you publish

1. **Email.** `awaisshah.IST@hotmail.com` appears in the footer and on `contact.html`. Once the domain is live, set up `awais@yourdomain.com` and replace it. Search and replace across all five HTML files.
2. **Tinova results.** The Tinova section on `work.html` currently presents cadences and targets, labelled as targets. When you have real outcome numbers, replace the four boxes under "The operating system I run" with results and delete the sentence above them that flags them as targets.
3. **Missing proof.** The outbound, inbound and webinar sections in your source document were empty. If you have screenshots for those, drop them into `assets/img/` and add a `.shot` figure block. Copy any existing one as a template.
4. **LinkedIn URL.** Set to `linkedin.com/in/awaisalishah`. Confirm that is your current handle.

## Editing

All colours, type scale and spacing live in the `:root` block at the top of `site.css`. Changing `--accent` changes every accent on the site.

To add a before/after comparison anywhere, copy an existing `.ba` block and swap the two image paths. The first image is the after state, the second is the before.
