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

  //Click for intro s//
  window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    const audio = document.getElementById('batman-audio');

    document.addEventListener('click', () => {
      popup.style.display = 'none';
      playIntro();
    });
  });

  function playIntro() {
    const audio = document.getElementById('batman-audio');
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
    console.log("Intro is playing...");
  }