export function duplicateEncode(word: string) {
  let arr = word.split('')
  let result = arr.map((w, index) => {
    let match = false
    let a = w.toLowerCase()
    for (let i = 0; i < word.length; i++) {
      let b = word[i].toLowerCase()
      if (i !== index && a === b) {
        match = true
        break
      }
    }
    if (match) {
      return ")"
    } else {
      return "("
    }
  })

  return result.join('')
}



