document.addEventListener("DOMContentLoaded", function() {
    insertHeader();
});

function insertHeader() {
    const headerHTML = `
        <header>
            <div class="header-content">
                <h1><a href="../index.html">Paint The Nights - Micro Blog</a></h1>
                <nav>
                    <a href="../index.html">Micro Posts</a> |
                    <a href="../pages/NanoBlog.html">Nano Posts</a> |
                    <a href="../pages/About.html">About</a> |
                    <a href="../pages/Donate.html">Donate</a> |
                    <a href="../pages/Contact.html">Contact</a> |
                    <a href="../feed.rss">RSS</a>
                </nav>
            </div>
        </header>
        <hr>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}
