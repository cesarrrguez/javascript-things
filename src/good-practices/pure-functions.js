// ❌ Using impure functions
// const STOP_WORDS = ['a', 'and', 'the']
// let inputSearch = 'The new iPhone'

// const slugify = () => inputSearch
//   .split(' ')
//   .map(n => n.toLowerCase())
//   .filter(n => !STOP_WORDS.includes(n))
//   .join('-')

// slugify()

// ✔️ Using pure functions
const slugify = ({ input, stopWords }) => {
  return input
    .split(' ')
    .map(n => n.toLowerCase())
    .filter(n => !stopWords.includes(n))
    .join('-')
}

