function permutations(str) {
  let begin = 0,
    result = [];
  permutation(str.split(''), begin, result);
  return result;
}

function permutation(str, begin, result) {
  if (begin + 1 === str.length) {
    result.push(str.join(""));
  } else {
    for (let i = begin; i < str.length; i++) {
      if (notSame(str, begin, i)) {
        swap(str, begin, i);
        permutation(str, begin + 1, result);
        swap(str, begin, i)
      }
    }
  }
}

function notSame(str, begin, end) {
  for (let p = begin; p < end; p++) {
    if (str[p] === str[end]) {
      return false;
    }
  }
  return true;
}

function swap(str, a, b) {
  let temp = str[a];
  str[a] = str[b];
  str[b] = temp;
}

console.log(permutations("abac").length);
