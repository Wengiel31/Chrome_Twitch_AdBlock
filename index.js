setInterval(() => {
    const ad = document.getElementById("amazon-video-ads-iframe");
    if (ad) {
        ad.remove();
    }
}, 1000);
