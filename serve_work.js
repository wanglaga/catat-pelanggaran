self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./dist/output.css", "./dist/img/logo192.png"]);
        })
    );
})

self.addEventListener("fetch", e => {
    console.log(`intercept fetch request for : ${e.request.url}`);
})