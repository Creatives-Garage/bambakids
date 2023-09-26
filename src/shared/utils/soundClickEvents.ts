export async function playClickSound() {
  if (typeof window !== "undefined") {
    try {
      let audio = new window.Audio("/sounds/mouseClick.mp3");
      audio.load();
      await audio.play();
    } catch (error) {
    }
  }
}
