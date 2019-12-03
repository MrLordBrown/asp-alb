// This is the service worker with the Cache-first network

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in

if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
	console.log("[Workbox] active service worker found, no need to register");
    } else {
	// Register the service worker
	window.addEventListener('load', function() {
	    navigator.serviceWorker.register("sw.js", {
		scope: "./"
	    })
		.then(function (reg) {
		    console.log("[Workbox] Service worker has been registered for scope: " + reg.scope);
		});
	})
    };
}
	
