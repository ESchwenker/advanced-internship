export function formatTime(seconds: number) {
  if (!seconds || isNaN(seconds)) return "0:00"

  const totalSeconds = Math.floor(seconds) // removes decimals
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60

  return `${mins}:${secs.toString().padStart(2, "0")}`
}