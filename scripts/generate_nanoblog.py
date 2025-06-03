import re
from pathlib import Path

def main():
    repo_root = Path(__file__).resolve().parent.parent
    posts_dir = repo_root / 'nano-posts'
    output_file = repo_root / 'pages' / 'NanoBlog.html'

    def post_key(path):
        text = path.read_text()
        m = re.search(r'<time datetime="(\d{4}-\d{2}-\d{2})"', text)
        date = m.group(1) if m else '1970-01-01'
        return date

    post_files = sorted(posts_dir.glob('post-*.html'), key=lambda p: post_key(p), reverse=True)
    posts_html = '\n\n'.join(p.read_text().strip() for p in post_files)

    template = f"""<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Nano Blog</title>
    <link rel=\"stylesheet\" href=\"../style.css\">
    <link rel=\"icon\" type=\"image/x-icon\" href=\"../icon/favicon.jpg\">
</head>

<body>
    <div id=\"dynamic-header\"></div>

    <!-- BODY -->
    <div class=\"main-content\">
{posts_html}
    </div>

    <script src=\"../js/header.js\"></script>
    <script>insertHeader(1);</script>
</body>
"""

    output_file.write_text(template)
    print(f"Wrote {output_file} with {len(post_files)} posts.")

if __name__ == '__main__':
    main()

