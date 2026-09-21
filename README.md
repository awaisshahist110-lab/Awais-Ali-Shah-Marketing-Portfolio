# Awais Ali Shah, portfolio site

Static site. No build step, no dependencies, no framework. Open `index.html` in a browser to preview locally.

## Files

```
index.html          Home, the senior B2B copywriter positioning
work.html           Case studies: Xgrid, Tinova, DieselGeeks, brand and website work, client campaigns
contact.html        Contact details and fit criteria
assets/css/site.css Design system: palette, type scale, spacing, all components
assets/js/site.js   Before/after comparison sliders
assets/img/         48 screenshots, compressed and renamed
assets/favicon.svg
```

## Publishing it

The site is served by GitHub Pages from the root of the `gh-pages` branch:
**https://awaisshahist110-lab.github.io/Awais-Ali-Shah-Marketing-Portfolio/**

`.github/workflows/deploy-pages.yml` keeps that branch current. On every push to
the deployment branch it mirrors the branch onto `gh-pages` with a single force
push. The site is plain static files at the repository root, so there is nothing
to build and nothing to upload by hand. To update the live site, edit the HTML or
CSS, commit, push. It goes live about a minute later.

`.nojekyll` is in the root so Pages serves the files as they are instead of
running them through Jekyll.

**If the URL returns 404.** Pushing a `gh-pages` branch to a public repository
usually makes GitHub create the Pages site on its own. If it did not, set it once
by hand: Settings, Pages, Source, Deploy from a branch, `gh-pages`, `/ (root)`.
Nothing else changes; the workflow already keeps the branch up to date.

**Custom domain.** Buy the domain, add a `CNAME` file in the repository root
containing just the domain, then point the DNS at GitHub Pages: four `A` records
for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153`), or a `CNAME` record for `www` pointing at
`awaisshahist110-lab.github.io`. Then Settings, Pages, Custom domain, and tick
Enforce HTTPS once the certificate is issued. `awaisalishah.com` if it is free.

## Things to change before you publish

1. **Email.** `awaisshah.IST@hotmail.com` appears in the footer and on `contact.html`. Once the domain is live, set up `awais@yourdomain.com` and replace it. Search and replace across all three HTML files.
2. **Tinova results.** The Tinova section on `work.html` currently presents cadences and targets, labelled as targets. When you have real outcome numbers, replace the four boxes under "The operating system I run" with results and delete the sentence above them that flags them as targets.
3. **Missing proof.** The outbound, inbound and webinar sections in your source document were empty. If you have screenshots for those, drop them into `assets/img/` and add a `.shot` figure block. Copy any existing one as a template.
4. **LinkedIn URL.** Set to `linkedin.com/in/awaisalishah`. Confirm that is your current handle.

## Editing

All colours, type scale and spacing live in the `:root` block at the top of `site.css`. Changing `--accent` changes every accent on the site.

To add a before/after comparison anywhere, copy an existing `.ba` block and swap the two image paths. The first image is the after state, the second is the before.
