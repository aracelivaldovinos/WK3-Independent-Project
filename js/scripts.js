function beepBoop (string) {
  const number = parseInt(string)
  const output = []
  for (let i=0; i <=number; i+=1) {
  output.push(i)
  }
  return output
}