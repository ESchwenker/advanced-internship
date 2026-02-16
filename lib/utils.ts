export function formatTime(seconds: number) {
  if (!seconds || isNaN(seconds)) return "00:00"

  const totalSeconds = Math.floor(seconds)

  const mins = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2,"0")

  const secs = (totalSeconds % 60)
    .toString()
    .padStart(2,"0")

  return `${mins}:${secs}`
}

export function formatTimeVerbose(seconds: number) {
  if (!seconds || isNaN(seconds)) return "0 mins 00 secs"

  const totalSeconds = Math.floor(seconds)
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60

  return `${mins} mins ${secs} secs`
}