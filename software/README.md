# Software Tools

This folder contains software developed by the Machine Learning 4 Biomedicine Group, along with tutorials and demos for each tool.

## Adding a New Tool

1. Copy the template folder:
   ```bash
   cp -r software/_template software/my-tool-name
   ```

2. Edit `software/my-tool-name/index.html`:
   - Update the tool name and description
   - Add links to source code, documentation, and papers

3. Add content:
   - **tutorials/** — Jupyter notebooks (`.ipynb`), markdown guides, or step-by-step walkthroughs
   - **demos/** — Interactive HTML demos, example outputs, or sample data

4. Add a card on the home page (`index.html`) in the **Software Developed** section linking to `software/my-tool-name/index.html`.

## Folder Structure

```
software/
├── README.md
├── _template/          # Copy this to create a new tool
│   ├── index.html
│   ├── tutorials/
│   └── demos/
└── my-tool-name/       # Your tool (example)
    ├── index.html
    ├── tutorials/
    └── demos/
```

## Notes

- Tool pages use the shared header/footer from `js/layout.js`. Do not duplicate them in tool `index.html`.
- Use relative paths so pages work on GitHub Pages and when opened locally.
- For Jupyter notebooks on GitHub Pages, link directly to the `.ipynb` file on GitHub or use [nbviewer](https://nbviewer.org/).
- Keep the `_template` folder unchanged as a reference for new tools.
