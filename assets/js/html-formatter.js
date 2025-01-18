function formatHTML() {
    let htmlInput = document.getElementById('htmlInput').value;
    let formattedHTML = htmlInput
        .replace(/>\s+</g, '>\n<')        // Add line breaks
        .replace(/\s{2,}/g, ' ')         // Remove extra spaces
        .replace(/</g, '&lt;')           // Escape HTML for output
        .replace(/>/g, '&gt;');

    document.getElementById('formattedHTML').innerText = formattedHTML;
}