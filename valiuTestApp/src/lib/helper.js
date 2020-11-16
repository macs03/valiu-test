export const ramdom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const setInputValue = (value) => {
  const joined = value.join('');
  const replaced = joined.replace(',', '.');
  const newValue = new Intl.NumberFormat(['id']).format(replaced);

  return newValue;
};
