export function getAudioDuration(url: string): Promise<number> {

  return new Promise((resolve) => {

    const audio = document.createElement("audio")

    audio.preload = "metadata"
    audio.src = url

    audio.onloadedmetadata = () => {
      resolve(audio.duration || 0)
    }

    audio.onerror = () => {
      resolve(0)
    }

  })

}
