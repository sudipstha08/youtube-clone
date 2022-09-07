const formatDateFromNow = (timeStamp) => {
  const dateNow = new Date()
  const date = new Date(timeStamp)
  const milliSec = dateNow - date
  const times = milliSec / (60 * 60 * 1000) // Time in hour
  if (times >= 8760) {
    const year = Math.floor(times / (24 * 365))
    return `${year} year ago`
  } else if (times >= 720) {
    const month = Math.floor(times / (24 * 30))
    return `${month} months ago`
  } else if (times >= 24) {
    const day = Math.floor(times / 24)
    return `${day} day ago`
  } else if (times >= 1) {
    const hour = Math.floor(times)
    return `${hour} hour ago`
  } else if (times * 60 >= 1) {
    const min = Math.floor(times * 60)
    return `${min} minutes ago`
  } else {
    return `${Math.floor(times * 60 * 60)} sec ago`
  }
}

export { formatDateFromNow }
