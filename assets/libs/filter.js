const image = document.getElementById('image');
const blur = document.getElementById('blur');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const grayscale = document.getElementById('grayscale');
const hueRotate = document.getElementById('hue-rotate');
const invert = document.getElementById('invert');
const opacity = document.getElementById('opacity');
const saturate = document.getElementById('saturate');
const sepia = document.getElementById('sepia');
const cssOutput = document.getElementById('css-output');
const copyButton = document.getElementById('copy-button');

// Default filter values
const defaultFilters = {
    blur: '0px',
    brightness: '100%',
    contrast: '100%',
    grayscale: '0%',
    hueRotate: '0deg',
    invert: '0%',
    opacity: '100%',
    saturate: '100%',
    sepia: '0%'
};

// Update the filters and CSS output
function updateFilters() {
    let filterValues = '';

    // Check each filter, and only include it if it differs from the default
    if (blur.value !== '0') filterValues += `blur(${blur.value}px) `;
    if (brightness.value !== '100') filterValues += `brightness(${brightness.value}%) `;
    if (contrast.value !== '100') filterValues += `contrast(${contrast.value}%) `;
    if (grayscale.value !== '0') filterValues += `grayscale(${grayscale.value}%) `;
    if (hueRotate.value !== '0') filterValues += `hue-rotate(${hueRotate.value}deg) `;
    if (invert.value !== '0') filterValues += `invert(${invert.value}%) `;
    if (opacity.value !== '100') filterValues += `opacity(${opacity.value}%) `;
    if (saturate.value !== '100') filterValues += `saturate(${saturate.value}%) `;
    if (sepia.value !== '0') filterValues += `sepia(${sepia.value}%) `;

    // Trim extra spaces
    filterValues = filterValues.trim();

    // Apply filters to the image
    image.style.filter = filterValues || 'none'; // If no filter is applied, use 'none'

    // Update the generated CSS code
    cssOutput.textContent = filterValues ? `filter: ${filterValues};` : 'filter: none;';
}

// Copy CSS to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(cssOutput.textContent)
        .then(() => {
            alert("CSS copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}

// Event listeners for each filter
blur.addEventListener('input', updateFilters);
brightness.addEventListener('input', updateFilters);
contrast.addEventListener('input', updateFilters);
grayscale.addEventListener('input', updateFilters);
hueRotate.addEventListener('input', updateFilters);
invert.addEventListener('input', updateFilters);
opacity.addEventListener('input', updateFilters);
saturate.addEventListener('input', updateFilters);
sepia.addEventListener('input', updateFilters);
copyButton.addEventListener('click', copyToClipboard);

// Initialize with default settings
updateFilters();
