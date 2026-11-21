# Keshav Chikkamath — Portfolio

A responsive, multi-page portfolio built with plain HTML, CSS and JavaScript. It is designed for GitHub Pages and does not require a build step.

## Pages
- `index.html` — About / interactive collage homepage
- `creativity.html` — creative work and Instagram reel links
- `work.html` — interactive laptop with project case files
- `journey.html` — education and personal timeline
- `resume.html` — embedded PDF resume and download
- `contact.html` — email, LinkedIn and Instagram

## Preview locally
Open `index.html` in a browser. For a local server, run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new GitHub repository, for example `keshav-portfolio`.
2. Extract this ZIP on your computer.
3. Upload the *contents* of this folder (not the outer ZIP) to the repository root. `index.html`, `styles.css`, `script.js` and the `assets` folder must be at the root level.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait for GitHub Pages to publish. The published URL will appear in the Pages settings.

## Add your own work
### Instagram reels
The creativity page currently links to your Instagram profile because individual reel URLs were not supplied. In `creativity.html`, replace each profile URL with the specific reel URL as you add projects. Instagram controls playback and sound on its own site. Browser autoplay with sound is restricted, so this project does not attempt to force sound-on autoplay.

### Project evidence and recommendation letters
Add approved images/PDFs to `assets/`, then link them from `work.html`. Only add recommendation letters after you have the final files and permission to display them.

### Homepage illustration
`assets/homepage-collage.png` is the custom collage artwork created for this first version. The interactive brain, laptop and bag are transparent click zones layered over the illustration. If you replace the artwork, you may need to adjust the hotspot positions in `styles.css`.

### Contact details
The current email and social links are populated from the details supplied for this project. Update the relevant anchors in `contact.html` if any URL changes.

## Notes
- No build tooling or framework is required.
- Google Fonts are loaded from Google Fonts; if unavailable, local system fallbacks are used.
- Sound effects are synthesized locally after a visitor clicks an interactive object. There is no background music.
- The resume PDF is included in `assets/keshav-resume.pdf`.
- The site is mobile responsive. The homepage hotspot positions are tuned to the included hero artwork.
