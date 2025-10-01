  
  function videoPlay () {
    
  const video = document.getElementById("myVideo");
  const muteButton = document.getElementById("muteButton");

  muteButton.addEventListener("click", () => {
    if(video.muted){
      video.muted = false;
      muteButton.textContent = "🔊";
    } else {
      video.muted = true;
      muteButton.textContent = "🔇";
    }
  });
}
export default videoPlay;