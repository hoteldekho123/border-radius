// Function to update the gradient based on color and degree changes
function updateGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const degree = document.getElementById('degree').value;

    // Create the gradient CSS
    const gradient = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
    
    // Apply the gradient to the preview box
    const gradientBox = document.getElementById('gradient-box');
    gradientBox.style.background = gradient;
  
    // Display the generated CSS code
    const cssCode = `background: ${gradient};`;
    document.getElementById('css-code').value = cssCode;
}

// Function to handle gradient box click and pick a new color
function pickColor(event) {
    const gradientBox = document.getElementById('gradient-box');
    const rect = gradientBox.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate within the box
    const y = event.clientY - rect.top;  // Y coordinate within the box

    // Calculate which color to change based on the click position (left or right half)
    const isLeftHalf = x < rect.width / 2;

    // Open the color picker based on the click
    if (isLeftHalf) {
        document.getElementById('color1').click();
    } else {
        document.getElementById('color2').click();
    }
}

// Attach event listeners to the input fields for live updates
document.getElementById('color1').addEventListener('input', updateGradient);
document.getElementById('color2').addEventListener('input', updateGradient);
document.getElementById('degree').addEventListener('input', updateGradient);

// Attach event listener to the gradient box to pick color
document.getElementById('gradient-box').addEventListener('click', pickColor);

// Initial call to display default gradient on page load
updateGradient();
