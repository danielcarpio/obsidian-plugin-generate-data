import { faker } from "@faker-js/faker";
import { DataGeneratorSettingTab } from "src/config/DataGeneratorSettingTab";

export const generateIBAN = () => {
  return faker.finance.iban({
    countryCode: DataGeneratorSettingTab.COUNTRY_CODE,
  });
};
