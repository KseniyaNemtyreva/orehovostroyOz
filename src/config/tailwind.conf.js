const colorTheme = {
    'backg':'var(--backg)',
    'dark':'var(--dark)',
    'white':'var(--white)',
    'dark_grey':'var(--dark_grey)',
    'gray':'var(--gray)',
    'grey1':'var(--grey1)',
    'red':'var(--red)',
    'dark_dark_blue':'var(--dark_dark_blue)',    
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }