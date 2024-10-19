import { CONTROL_DIGITS, FIRST_DIGITS } from "./utils/cups_constants";

const getFirstDigits = (i = 0): string | undefined => {
  const distributorsPrefix = Object.values(FIRST_DIGITS).flat();
  const randomNumber = Math.floor(Math.random() * distributorsPrefix.length);
  return distributorsPrefix[randomNumber];
};

const getMiddleDigits = () => {
  const max = 999999999999,
    min = 100000000000;
  return (Math.floor(Math.random() * (max - min)) + min).toString();
};

const getEndChars = (cups: string) => {
  const c_cups = cups.substring(2);
  const resto = parseInt(c_cups) % 529;
  const c = resto % 23;
  const r = Math.floor(resto / 23);
  const result = [c, r].sort();

  return CONTROL_DIGITS[result[0]] + CONTROL_DIGITS[result[1]];
};

export const generateSpanishCUPS = () => {
  let cups = "";
  cups += getFirstDigits();
  cups += getMiddleDigits();
  cups += getEndChars(cups);

  return cups;
};
