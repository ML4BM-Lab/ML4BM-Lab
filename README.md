# Machine Learning 4 Biomedicine Group — Website

Static website for the **Machine Learning 4 Biomedicine Group** at the Center for Applied Medical Research (CIMA), University of Navarra.

**Principal Investigator:** Mikel Hernaez

## Shared Header & Footer

Edit **`js/layout.js`** once — changes apply to every page. Look for `ML4BM_LAYOUT.header` and `ML4BM_LAYOUT.footer`. Use `{{BASE}}` as a prefix for internal links (e.g. `{{BASE}}contact.html`).

Each page has `<div id="site-header">` and `<div id="site-footer">` placeholders. `js/layout.js` + `js/includes.js` inject the shared markup. Set `data-page` on the includes script to highlight the active nav tab (e.g. `data-page="members"`).

## Repository Structure

```
├── index.html              # Home page
├── members.html            # Team members
├── projects.html           # Research projects
├── publications.html       # Publication list
├── news.html               # News and announcements
├── contact.html            # Contact information
├── css/styles.css          # Site styles
├── js/layout.js            # Shared header & footer (edit once)
├── js/includes.js          # Injects layout into each page
├── js/main.js              # Mobile navigation
├── assets/images/          # Logos and images
└── software/               # Software tools, tutorials, demos
    ├── README.md
    └── _template/          # Copy to add a new tool
```

## Adding Content

| Page | What to add |
|------|-------------|
| `members.html` | Member cards with photos, roles, bios |
| `projects.html` | Project descriptions and funding info |
| `publications.html` | Articles (manual HTML or BibTeX later) |
| `news.html` | Dated news posts |
| `contact.html` | Email, address, map |
| `index.html` | Research topics, software cards |
| `software/` | New tool folders (see `software/README.md`) |


## License

Content and code copyright © Machine Learning 4 Biomedicine Group. Add a license file if you wish to specify terms for software tools.
