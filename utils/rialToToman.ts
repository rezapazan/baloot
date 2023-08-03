export const rialToToman = (number: number): string => {
  return Number(number.toString().slice(0, -1)).toLocaleString('en-US')
}
