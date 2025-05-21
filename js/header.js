// Function to generate and insert the common header HTML
function insertHeader(depth) {
  // Determine ROOT_PATH and PAGES_PATH based on depth
  let ROOT_PATH = '';
  let PAGES_PATH = '';

  if (depth === 0) {
    ROOT_PATH = './';
    PAGES_PATH = './pages/';
  } else if (depth === 1) {
    ROOT_PATH = '../';
    PAGES_PATH = '../pages/';
  } else if (depth === 2) {
    ROOT_PATH = '../../';
    PAGES_PATH = '../../pages/';
  } else {
    // Default to root if depth is not recognized
    ROOT_PATH = './';
    PAGES_PATH = './pages/';
    console.warn('Header depth not recognized, defaulting to root paths.');
  }

  // Construct the header HTML string
  const headerHTML = `
<header>
    <div class="header-content">
        <h1><a href="${ROOT_PATH}index.html">Paint The Nights - Micro Blog</a></h1>
        <nav>
            <a href="${ROOT_PATH}index.html">Micro Posts</a> |
            <a href="${PAGES_PATH}NanoBlog.html">Nano Posts</a> |
            <a href="${PAGES_PATH}About.html">About</a> |
            <a href="${PAGES_PATH}Donate.html">Donate</a> |
            <a href="${PAGES_PATH}Contact.html">Contact</a> |
            <a href="${ROOT_PATH}feed.rss">RSS</a>
        </nav>
    </div>
</header>
<hr>
  `;

  // Find the target element for the header
  const headerContainer = document.getElementById('dynamic-header');

  if (headerContainer) {
    // If the container exists, insert the HTML into it
    headerContainer.innerHTML = headerHTML;
  } else {
    // If the container does not exist, prepend the header to the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    console.warn('Element with ID "dynamic-header" not found. Header prepended to body.');
  }
}
