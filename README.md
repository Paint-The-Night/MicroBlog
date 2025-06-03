## Introduction
This is the public repository for the `Paint The Nights` Micro Blog.

## Features
* Pure HTML / CSS
* Ultra Lightweight & Portable
* X (Twitter) Post Backup
* Simple script (`scripts/generate_nanoblog.py`) rebuilds the Nano Blog page from individual posts

## Automation
To keep `pages/NanoBlog.html` up to date:

1. **Local commits** – link `scripts/pre-commit` into `.git/hooks/pre-commit`:

   ```sh
   ln -s ../../scripts/pre-commit .git/hooks/pre-commit
   ```

   The hook regenerates the page and stages it on every commit.

2. **GitHub** – the included workflow (`.github/workflows/nanoblog.yml`) runs the same script on pushes and commits the result back.
