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

