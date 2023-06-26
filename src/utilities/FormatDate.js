const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});
export function fromatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

let options = {
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  month: 'short',
};
const DATE_FORMATTER = new Intl.DateTimeFormat('en-NG', options);

export function formatDate(date) {
  return DATE_FORMATTER.format(date);
}

export const DATE_FORMAT = new Intl.DateTimeFormat('en-NG');
export function DateFormat(date) {
  return DATE_FORMAT.format(date);
}
