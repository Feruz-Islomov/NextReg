export const playSound = () => {
  const audio = new Audio("/sound.mp3"); // Replace with the actual name of your sound file
  audio.play();

  // Optionally, stop the sound after 1 second
  setTimeout(() => {
    audio.pause();
  }, 1000);
};
