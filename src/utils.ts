export const getYear = (date: string) => {
  if(!date) return;
  return new Date(date).getFullYear()
}

export const getMonthAndYear = (date: string) => {
  if(!date) return;
  const month = new Date(date).getMonth() + 1
  const year = new Date(date).getFullYear()
  return `${month.toString().padStart(2, '0')}/${year}`
}

export const getFullDate = (date: string) => {
  if(!date) return;
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth() + 1
  const year = new Date(date).getFullYear()
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
}