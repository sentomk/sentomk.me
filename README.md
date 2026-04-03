# Sentomk Journal

A minimal static blog prototype focused on readable typography and simple structure.

## Files

- `index.html`: home page with featured post, recent essays, notes, and archive.
- `posts/on-building-small-things.html`: sample article page.
- `posts/essays/`: markdown source files for essays.
- `posts/essays/_template.md`: front matter + markdown template.
- `posts/notes/`: JSONL source files for short notes.
- `posts/notes/_template.jsonl`: one-line-per-note template.
- `scripts/build_posts.py`: convert essay `.md` and note `.jsonl` files into `posts/*.html`.
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

## Source -> HTML

1. Create an essay markdown file in `posts/essays/` or a notes JSONL file in `posts/notes/`.
2. Build html:
   - `python scripts/build_posts.py`
3. The script scans `posts/` recursively for `.md` and `.jsonl` files, skips files starting with `_`, and generates HTML files in `posts/`.

Optional:
- Build a single file: `python scripts/build_posts.py --file posts/essays/your-post.md`
- Build a notes file: `python scripts/build_posts.py --file posts/notes/your-notes.jsonl`

## Notes JSONL

Use one JSON object per line. Each note can define:

- `title`
- `slug`
- `date`
- `kicker`
- `category`
- `description`
- `lede`
- `body`

The minimal useful entry is:

```json
{"slug":"your-note-slug","date":"2026-04-03","body":"这是短札正文。"}
```

## GitHub Pages

- Workflow file: `.github/workflows/pages.yml`
- Trigger: push to `main` (or manual `workflow_dispatch`)
- Deploy target: repository root as static site

First-time setup on GitHub:
1. Go to `Settings -> Pages`
2. Set `Source` to `GitHub Actions`
