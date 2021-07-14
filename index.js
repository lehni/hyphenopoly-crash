import hyphenopoly from 'hyphenopoly'

const hyphenate = await hyphenopoly.config({ require: ['ru'] })

console.log(hyphenate('хакерські'))
console.log(hyphenate('hacking'))
