export const ramdom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const formatNumber = (num) => {
  return num
    .toFixed(Number.isInteger(num) ? 0 : 2) // always two decimal digits
    .replace('.', ',') // replace decimal point character with ,
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const setInputValue = (value) => {
  const joined = value.join('');
  const replaced = joined.replace(',', '.');
  const newValue = formatNumber(Number(replaced));
  return Number.isNaN(Number(replaced)) ? null : newValue;
};
