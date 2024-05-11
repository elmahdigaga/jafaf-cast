export function formatDate(timeString: string): string {
  const dateObject: Date = new Date(timeString)

  function addLeadingZero(num: number): string {
    return num < 10 ? '0' + num : num + ""
  }

  const day = addLeadingZero(dateObject.getDate())
  const month = addLeadingZero(dateObject.getMonth() + 1)
  const hours = addLeadingZero(dateObject.getHours())
  const minutes = addLeadingZero(dateObject.getMinutes())

  // Construct the formatted date string
  const formattedDateString: string = `${hours}:${minutes} ${day}/${month}`

  return formattedDateString
}
