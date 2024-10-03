const imageUpload = document.getElementById('imageUpload');
const uploadedImage = document.getElementById('uploadedImage');
const removeBackgroundBtn = document.getElementById('removeBackgroundBtn');
const loader = document.getElementById('loader');
const imageContainer = document.getElementById('imageContainer');

// Show image preview as soon as it is uploaded
imageUpload.addEventListener('change', function() {
    const file = imageUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Show image container and set the uploaded image
            imageContainer.style.display = 'block';
            uploadedImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle background removal when button is clicked
removeBackgroundBtn.addEventListener('click', function() {
    const file = imageUpload.files[0];
    if (!file) {
        alert('Please upload an image first');
        return;
    }

    // Show loader while processing
    loader.style.display = 'block';
    uploadedImage.style.display = 'none'; // Hide original image

    const formData = new FormData();
    formData.append('image_file', file);

    // Example using Remove.bg API (replace 'YOUR_API_KEY' with your actual API key)
    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'F6wLRPuSzAcDJVwjuMWxvSLq', // Replace with your own API key
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
    })
    .then(blob => {
        // Hide the loader
        loader.style.display = 'none';

        // Show the processed image
        const imgURL = URL.createObjectURL(blob);
        uploadedImage.src = imgURL;
        uploadedImage.style.display = 'block'; // Show new image
        imageContainer.classList.add('transparent-bg'); // Add transparent background pattern
    })
    .catch(err => {
        loader.style.display = 'none'; // Hide the loader in case of error
        alert('Error processing the image. Please try again.');
        console.error(err);
    });
});