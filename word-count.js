const ignoreChars = /[\.,]/;
const separator = " ";

export function wordCount(sentence) {
  return sentence
    .replace(ignoreChars, "")
    .toLowerCase()
    .split(separator)
    .reduce((prev, current) => {
      prev[current] = prev[current] + 1 || 1;
      return prev;
    }, {});
}
