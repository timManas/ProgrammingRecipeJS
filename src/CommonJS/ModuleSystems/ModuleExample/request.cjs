const TIMEOUT_SEC = 500

function encrytedData(data) {
  return 'Encrypted'
}

function sendReq(url, data) {
  const encryt = encrytedData(data)
  console.log(`Encrypted Data ${encryt} to url: ${url}`)
}

module.exports = {
  TIMEOUT_SEC,
  sendReq,
}
