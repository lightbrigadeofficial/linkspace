window.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("batman-audio");
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Auto-play started
        })
        .catch(error => {
          console.log("Autoplay was blocked. Playing on interaction...");
          document.addEventListener("click", () => {
            audio.play();
          }, { once: true });
        });
    }
  });
  window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    document.addEventListener('click', () => {
      popup.style.display = 'none';
      // You can trigger your intro function here
      playIntro();
    });
  });

  function playIntro() {
    console.log("Intro is playing...");
    // Replace with your actual intro logic
  }