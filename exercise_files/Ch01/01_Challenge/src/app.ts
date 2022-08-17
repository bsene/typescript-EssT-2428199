function formatDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}

const formattedDate = formatDate(new Date());

console.log(`Today's date is ${formattedDate}`);
