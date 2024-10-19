import { faker } from "@faker-js/faker";

export const generateSpanishIBAN = () => {
  return faker.finance.iban({ countryCode: "ES" });
};
