import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

export const formateDateDayjs = (date: Date) => {
  const todaysDate = new Date()
  const dateInit = dayjs(date)
  const currentYear = todaysDate.getFullYear()
  const dateYear = Number(dateInit.format('YYYY'))
  return currentYear === dateYear ? dateInit.format('ll') : dateInit.format('DD/MM/YYYY')
}
