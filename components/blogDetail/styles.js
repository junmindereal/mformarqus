export const styles = {
  article: `
    grid
    lg:grid-cols-3
    lg:gap-6
  `,
  content: `
    prose
    max-w-none
    lg:prose-lg
    xl:col-span-2
    dark:prose-dark
  `,
  time: `
    text-sm
    text-gray-500
    dark:text-gray-400
  `,
  title: `
    bg-clip-text
    bg-gradient-to-r
    from-orange-400
    to-pink-600
  `,
  cardContainer: '',
  card: `
    relative
    flex
    flex-col
    items-start
    justify-center
    p-6
    bg-gray-100
    dark:shadow-none
    dark:bg-gray-900
    rounded-2xl
  `,
  letterContainer: `
    flex
    items-end
  `,
  firstLetter: `
    relative
    text-4xl
    font-semibold
  `,
  imageContainer: `
    mx-auto
    w-52
  `,
  image: `
    w-full
    h-full
  `,
  imageTitle: `
    block
    w-full
    text-4xl
    font-semibold
    text-center
  `
}
