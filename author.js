// Logging function to centralize all log outputs
function logMessage(message, type = 'info') {
    const timestamp = new Date().toISOString();
    switch (type) {
        case 'info':
            console.info(`[INFO] [${timestamp}]: ${message}`);
            break;
        case 'error':
            console.error(`[ERROR] [${timestamp}]: ${message}`);
            break;
        case 'warning':
            console.warn(`[WARNING] [${timestamp}]: ${message}`);
            break;
        default:
            console.log(`[LOG] [${timestamp}]: ${message}`);
            break;
    }
}

document.getElementById('searchButton').addEventListener('click', async function () {
    const authorName = document.getElementById('authorName').value.trim();
    const bookName = document.getElementById('bookName').value.trim();

    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    // Log the search inputs
    logMessage(`Search triggered with Author: '${authorName}' and Book Title: '${bookName}'`);

    if (!authorName && !bookName) {
        alert('Please enter an author name or book title.');
        logMessage('No input provided for search. Prompted user to enter either an author or book title.', 'warning');
        return;
    }

    // Query Open Library API and Amazon API (or placeholder for now)
    try {
        if (authorName) {
            logMessage(`Fetching books by author: ${authorName} from Open Library API...`);
            const openLibraryAuthorResponse = await fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(authorName)}`);
            const openLibraryAuthorData = await openLibraryAuthorResponse.json();

            if (openLibraryAuthorData.docs.length === 0) {
                alert('No books found for this author on Open Library.');
                logMessage(`No books found for author: ${authorName} on Open Library.`, 'warning');
            } else {
                logMessage(`Found ${openLibraryAuthorData.docs.length} books by author: ${authorName} on Open Library.`);
                displayBooksFromOpenLibrary(openLibraryAuthorData.docs);
            }

            // --- Amazon Books API Integration (Placeholder) ---
            logMessage(`Fetching books by author: ${authorName} from Amazon API (placeholder)...`);
            const amazonBooks = await fetchBooksFromAmazon(authorName, 'author');
            displayBooksFromAmazon(amazonBooks);
        }

        if (bookName) {
            logMessage(`Fetching authors for book title: ${bookName} from Open Library API...`);
            const openLibraryBookResponse = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`);
            const openLibraryBookData = await openLibraryBookResponse.json();

            if (openLibraryBookData.docs.length === 0) {
                alert('No authors found for this book on Open Library.');
                logMessage(`No authors found for book title: ${bookName} on Open Library.`, 'warning');
            } else {
                logMessage(`Found ${openLibraryBookData.docs.length} authors for book title: ${bookName} on Open Library.`);
                displayAuthorsFromOpenLibrary(openLibraryBookData.docs);
            }

            // --- Amazon Books API Integration (Placeholder) ---
            logMessage(`Fetching authors for book title: ${bookName} from Amazon API (placeholder)...`);
            const amazonAuthors = await fetchBooksFromAmazon(bookName, 'title');
            displayAuthorsFromAmazon(amazonAuthors);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        logMessage(`Error fetching data: ${error.message}`, 'error');
        alert('Failed to fetch data from Open Library or Amazon.');
    }
});

// --- Open Library Helper Functions ---
function displayBooksFromOpenLibrary(books) {
    const resultsContainer = document.getElementById('resultsContainer');
    books.slice(0, 20).forEach(book => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const coverId = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150';
        resultDiv.innerHTML = `
            <img src="${coverId}" alt="${book.title}">
            <p>${book.title}</p>
        `;

        resultsContainer.appendChild(resultDiv);
    });
    logMessage(`Displayed ${books.length} books from Open Library.`);
}

function displayAuthorsFromOpenLibrary(books) {
    const resultsContainer = document.getElementById('resultsContainer');
    const authorsSet = new Set();
    books.forEach(book => {
        book.author_name.forEach(author => authorsSet.add(author));
    });

    authorsSet.forEach(author => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML = `<p>${author}</p>`;
        resultsContainer.appendChild(resultDiv);
    });
    logMessage(`Displayed ${authorsSet.size} unique authors from Open Library.`);
}

// --- Amazon Books Placeholder Functions ---
async function fetchBooksFromAmazon(query, type) {
    logMessage(`Simulating Amazon API request for ${type === 'author' ? 'author' : 'book title'}: ${query}...`);
    // Placeholder for Amazon API request
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(type === 'author' 
                ? [{ title: 'Sample Amazon Book 1', cover: 'https://via.placeholder.com/150' }, { title: 'Sample Amazon Book 2', cover: 'https://via.placeholder.com/150' }]
                : ['Sample Amazon Author 1', 'Sample Amazon Author 2']);
        }, 1000);
    });
}

function displayBooksFromAmazon(books) {
    const resultsContainer = document.getElementById('resultsContainer');
    books.forEach(book => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const coverImage = book.cover || 'https://via.placeholder.com/150';
        resultDiv.innerHTML = `
            <img src="${coverImage}" alt="${book.title}">
            <p>${book.title}</p>
        `;

        resultsContainer.appendChild(resultDiv);
    });
    logMessage(`Displayed ${books.length} books from Amazon.`);
}

function displayAuthorsFromAmazon(authors) {
    const resultsContainer = document.getElementById('resultsContainer');
    authors.forEach(author => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML = `<p>${author}</p>`;
        resultsContainer.appendChild(resultDiv);
    });
    logMessage(`Displayed ${authors.length} authors from Amazon.`);
}

// Clear button event listener
document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('authorName').value = '';
    document.getElementById('bookName').value = '';
    document.getElementById('resultsContainer').innerHTML = '';
    logMessage('Cleared search inputs and results.');
});
