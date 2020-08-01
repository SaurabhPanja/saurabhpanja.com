self.addEventListener('install', (event)=>{
    console.log("Service worker installed")
    event.waitUntil(

        caches.open("static")
        .then((cache=>{
            cache.addAll([
                "/",
                "/index.html",
                "/lib/js/main.js",
                "/lib/css/style.css",
                "/lib/css/animate.css",
                "/lib/css/aos.css",
                "/lib/bootstrap.min.css",
                "/lib/fonts.css",
                "/lib/hover.css",
                "/lib/jQuery/jquery-3.3.1.min.js",
                "/lib/js/aos.js",
                "/lib/js/bootstrap.min.js",
                "/lib/js/popper.min.js",
                "/lib/js/typed.js",
                "/lib/js/typed.js@2.0.9"
            ])
            
        }))
    );
})

self.addEventListener('activate', ()=>{
    console.log("Service worker is acitvated")
})

self.addEventListener('fetch', event => {
    // Prevent the default, and handle the request ourselves.
    event.respondWith(async function() {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    }());
  });