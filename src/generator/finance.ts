import { faker } from "@faker-js/faker";
import { DataGeneratorSettingTab } from "src/config/DataGeneratorSettingTab";

export const generateIBAN = () => {
  return faker.finance.iban({
    countryCode: DataGeneratorSettingTab.COUNTRY_CODE,
  });
};

export const generateCreditCard = () => {
  return faker.finance.creditCardNumber();
};

export const generateCreditCardCVV = () => {
  return faker.finance.creditCardCVV();
};

export const generateCreditCardIssuer = () => {
  return faker.finance.creditCardIssuer();
};

export const generateBusinessName = () => {
  return faker.company.name();
};

export const generateBusinessCatchPhrase = () => {
  return faker.company.catchPhrase();
};

export const generateBuzzPhrase = () => {
  return faker.company.buzzPhrase();
};
