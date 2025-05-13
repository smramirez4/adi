const startBtn = document.getElementById('startBtn');
    const coverScreen = document.getElementById('coverScreen');
    const letterContent = document.getElementById('letterContent');
    const music = document.getElementById('bgMusic');

    startBtn.addEventListener('click', () => {
      coverScreen.classList.add('hidden');
      letterContent.classList.remove('hidden');
      music.play();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const music = document.getElementById("background-music");
        const volumeBtn = document.getElementById("volume-btn");
        const volumeIcon = document.getElementById("volume-icon");
    
        function playMusic() {
            music.play().catch(error => console.log("Autoplay blocked."));
            document.removeEventListener("click", playMusic); // Remove listener after first interaction
            document.removeEventListener("keydown", playMusic);
        }
    
        // Wait for user interaction before playing music
        document.addEventListener("click", playMusic);
        document.addEventListener("keydown", playMusic);
    
        // Toggle mute/unmute on button click
        volumeBtn.addEventListener("click", () => {
            if (music.muted) {
                music.muted = false;
                volumeIcon.src = "imahe/volume.webp";
            } else {
                music.muted = true;
                volumeIcon.src = "imahe/noaudio.png";
            }
        });
    });

    function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${6 + Math.random() * 4}s`; // Slower heart float

  document.querySelector('.heart-container').appendChild(heart);

  setTimeout(() => heart.remove(), 10000); // Match animation duration
}

function startHeartAnimation() {
  setInterval(createHeart, 500); // Slower interval
  document.removeEventListener('click', startHeartAnimation);
  document.removeEventListener('keydown', startHeartAnimation);
}

// Wait for user interaction to start hearts
document.addEventListener('click', startHeartAnimation);
document.addEventListener('keydown', startHeartAnimation);

