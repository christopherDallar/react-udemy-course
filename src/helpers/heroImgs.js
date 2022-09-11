const images = [
  'dc-arrow.jpg',
  'dc-batman.jpg',
  'dc-black.jpg',
  'dc-blue.jpg',
  'dc-flash.jpg',
  'dc-green.jpg',
  'dc-martian.jpg',
  'dc-robin.jpg',
  'dc-superman.jpg',
  'dc-wonder.jpg',
  'marvel-captain.jpg',
  'marvel-cyclops.jpg',
  'marvel-daredevil.jpg',
  'marvel-hawkeye.jpg',
  'marvel-hulk.jpg',
  'marvel-iron.jpg',
  'marvel-silver.jpg',
  'marvel-spider.jpg',
  'marvel-thor.jpg',
  'marvel-wolverine.jpg',
]
export const heroesImgs = (imgToSearch) => {
  const imgFound = images.find((img) => img === imgToSearch.replace('./', ''))
  return 'src/assets/heroes/' + imgFound
}
// export const heroesImgs = require.context('../assets/heroes', true)
// const path = require('path')
// const packagesDirectory = path.join(__dirname, '../assets/heroes')
// export const heroesImgs = require.context(
//   packagesDirectory,
//   true,
//   /(\w+)\.(\w+)\.(mdx?)/,
// )
// export { dyna default as heroesImgs } from '../../src/assets/heroes'
