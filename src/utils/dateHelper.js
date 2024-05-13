export function getCurrentDate() {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date();

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
