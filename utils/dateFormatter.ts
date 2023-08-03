export const dateFormatter = (unixTimestamp: number): string => {
  const milliseconds = unixTimestamp * 1000
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleString('fa-IR')
  return humanDateFormat
}
