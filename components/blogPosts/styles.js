export const styles = {
  orderedList: `
    grid
    grid-cols-1
    gap-10
    md:grid-cols-2
    md:gap-4
    lg:gap-6
    xl:grid-cols-3
  `,
  cardLink: `
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
    hover:bg-gradient-to-br
    hover:from-orange-400
    hover:to-pink-600
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
  `,
  descriptionContainer: `
    mt-4
  `,
  blogTitleLink: `
   inline-block 
  `,
  blogTitle: `
    inline-block
    text-2xl 
    font-semibold 
    leading-tight 
    hover:bg-clip-text 
    hover:text-transparent 
    hover:bg-gradient-to-r 
    hover:from-orange-400
    hover:to-pink-600
  `,
  excerpt: `
    mt-2
    text-sm
    text-gray-600
    dark:text-gray-400
  `
}
