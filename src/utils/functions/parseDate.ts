export const parseDate = (date: Date) => {
  let day: string = date.getDate().toString();
  if (day.length === 1) day = `0${day}`;

  let month: string = (date.getMonth() + 1).toString();
  if (month.length === 1) month = `0${month}`;

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
