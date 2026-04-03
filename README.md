# Sentomk Journal

A minimal static blog prototype focused on readable typography and simple structure.

## Files

- `index.html`: home page with featured post, recent essays, notes, and archive.
- `posts/on-building-small-things.html`: sample article page.
- `posts/markdown/`: markdown source files for posts.
- `posts/markdown/_template.md`: front matter + markdown template.
- `scripts/build_posts.py`: convert markdown files in `posts/markdown` to `posts/*.html`.
- `styles.css`: shared visual system and layout.

## Run

Open `index.html` directly in a browser, or serve the folder with any static file server.

On macOS:

- `./scripts/serve/start_server_macos.sh`
- custom port: `./scripts/serve/start_server_macos.sh 8000`

On Windows:

- `scripts\serve\start_server.bat`
- custom port: `scripts\serve\start_server.bat 8000`
- PowerShell: `.\scripts\serve\start_server.ps1 -Port 8000`

## Markdown -> HTML

1. Create a markdown file in `posts/markdown/` (copy `_template.md` as a starting point).
2. Build html:
   - `python scripts/build_posts.py`
3. The script generates article files in `posts/` (and skips files starting with `_`).

Optional:
- Build a single file: `python scripts/build_posts.py --file posts/markdown/your-post.md`

## GitHub Pages

- Workflow file: `.github/workflows/pages.yml`
- Trigger: push to `main` (or manual `workflow_dispatch`)
- Deploy target: repository root as static site

First-time setup on GitHub:
1. Go to `Settings -> Pages`
2. Set `Source` to `GitHub Actions`
