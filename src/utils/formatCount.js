const formatCount = (viewCount) => {
  const numOfViews = parseInt(viewCount)
  if (numOfViews < Math.pow(10, 3)) {
    return numOfViews
  } else if (numOfViews < Math.pow(10, 6)) {
    const noOfK = Math.floor(numOfViews / Math.pow(10, 3))
    return `${noOfK}k`
  } else if (numOfViews < Math.pow(10, 9)) {
    const noOfM = Math.floor(numOfViews / Math.pow(10, 6))
    return `${noOfM}M`
  } else if (numOfViews < Math.pow(10, 12)) {
    const noOfB = Math.floor(numOfViews / Math.pow(10, 9))
    return `${noOfB}B`
  } else {
    return 0
  }
}

export { formatCount }
