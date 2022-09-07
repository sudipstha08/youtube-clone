const numWithCommas = (num) => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return null
}

export { numWithCommas }
