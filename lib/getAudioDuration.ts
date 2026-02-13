export function getAudioDuration(url: string): Promise<number> {
  return new Promise((resolve) => {
    const audio = new Audio(url)

    audio.addEventListener("loadedmetadata", () => {
      resolve(audio.duration) // duration in seconds
    })
  })
}