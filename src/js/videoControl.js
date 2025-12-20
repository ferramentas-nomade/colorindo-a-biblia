
function videoControlInit() {
    const video = document.getElementById("meuVideo");

    video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.pause();
        video.load();
    });
}
export default videoControlInit;
