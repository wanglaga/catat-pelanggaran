if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serve_work.js").then(registration => {
        console.log("SW Terdaftar");
        console.log(registration);
    }).catch(error => {
        console.log("SW Register Gagal");
        console.log(error);
    })
}