// export const getclass = (classes) => {
//     return classes.filter(item => item !== '').join(' ').trim()
// }

export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
