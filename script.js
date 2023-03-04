// Disable caching for all AJAX requests
$.ajaxSetup({
  cache: false
});

// Disable caching for all browser requests
window.addEventListener('beforeunload', function() {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
});



// Function to change the video in the player
function changeVideo(videoUrl) {
  document.getElementById('video-player').src = videoUrl;
}


// // Send Email through form
// const form = document.getElementById('contact-form');
// const status = document.getElementById('status');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);

//   try {
//     const response = await fetch(event.target.action, {
//       method: form.method,
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       form.reset();
//       status.textContent = 'Message sent successfully.';
//     } else {
//       throw new Error('An error occurred while sending the message.');
//     }
//   } catch (error) {
//     status.textContent = error.message;
//   }
// });

//   xhr.send(`name=${name}&email=${email}&message=${message}`);

