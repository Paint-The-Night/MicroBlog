document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('nano-posts-container');
    if (!container) {
        console.error('Error: nano-posts-container not found.');
        return;
    }

    const basePath = '../nano-posts/';
    const maxPostsToTry = 50; // Try fetching up to 50 posts

    async function loadPosts() {
        console.log('Starting to load nano posts...');
        for (let i = 1; i <= maxPostsToTry; i++) {
            const postPath = `${basePath}post-${i}.html`;
            try {
                const response = await fetch(postPath);
                if (response.ok) {
                    const postHTML = await response.text();
                    // Appending new post HTML to the existing content
                    container.innerHTML += postHTML; 
                    console.log(`Successfully loaded and appended ${postPath}`);
                } else {
                    // If a post is not found (e.g., post-32.html doesn't exist), stop trying.
                    if (response.status === 404) {
                        console.log(`Finished loading posts. No more posts found after post-${i-1}.html (attempted ${postPath}).`);
                        break; 
                    } else {
                        // Log other HTTP errors but continue trying (optional, could break here too)
                        console.error(`Error fetching ${postPath}: ${response.status} ${response.statusText}`);
                    }
                }
            } catch (error) {
                // Log network errors or other issues
                console.error(`Network error or other issue fetching ${postPath}:`, error);
                // Optionally, decide if you want to break the loop on any network error.
                // If the server hosting nano-posts is down, further requests will likely fail.
                // However, a sporadic network error might not warrant stopping entirely.
                // For this project, we'll log and continue, but one could break here.
                // break; 
            }
        }
        console.log('Finished attempting to load all nano posts.');
    }

    loadPosts();
});
