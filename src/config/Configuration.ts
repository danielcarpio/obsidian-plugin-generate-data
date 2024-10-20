import * as personal_information from "src/generator/personal_information";
import * as finance from "src/generator/finance";
import * as it_related from "src/generator/it_related";
import { generateSpanishCUPS } from "src/generator/spanish_cups";
import { generateAnimal } from "src/generator/animals";
import { generateColorHSL, generateColorRGB } from "src/generator/colors";

type ConfigData = {
  id: string;
  name: string;
  description: string;
  generateFunction: Function;
  activeByDefault: boolean;
};

export const ConfigGeneration = <Record<string, ConfigData>>{
  firstName: {
    id: "generate-first-name",
    name: "First name",
    description: "Generate first name",
    generateFunction: personal_information.generateFirstName,
    activeByDefault: true,
  },
  lastName: {
    id: "generate-last-name",
    name: "Last name",
    description: "Generate last name",
    generateFunction: personal_information.generateLastName,
    activeByDefault: true,
  },
  email: {
    id: "generate-email",
    name: "Generate email",
    description: "Generate email",
    generateFunction: personal_information.generateEmail,
    activeByDefault: true,
  },
  password: {
    id: "generate-password",
    name: "Generate password",
    description: "Generate password",
    generateFunction: personal_information.generatePassword,
    activeByDefault: true,
  },
  jobTitle: {
    id: "generate-job-title",
    name: "Job title",
    description: "Generate job title",
    generateFunction: personal_information.generateJobTitle,
    activeByDefault: true,
  },
  sex: {
    id: "generate-sex",
    name: "Sex",
    description: "Generate sex",
    generateFunction: personal_information.generateSex,
    activeByDefault: true,
  },
  zodiacSign: {
    id: "generate-zodiac-sign",
    name: "Zodiac sign",
    description: "Generate zodiac sign",
    generateFunction: personal_information.generateZodiacSign,
    activeByDefault: false,
  },
  esCups: {
    id: "generate-spanish-cups",
    name: "Spanish Cups",
    description: "Generate spanish CUPS",
    generateFunction: generateSpanishCUPS,
    activeByDefault: false,
  },
  esDNI: {
    id: "generate-spanish-dni",
    name: "Spanish DNI",
    description: "Generate spanish id number",
    generateFunction: personal_information.generateSpanishDNI,
    activeByDefault: false,
  },
  iban: {
    id: "generate-iban",
    name: "IBAN",
    description: "Generate IBAN",
    generateFunction: finance.generateIBAN,
    activeByDefault: false,
  },
  animal: {
    id: "generate-animal",
    name: "Animal",
    description: "Generate animal",
    generateFunction: generateAnimal,
    activeByDefault: false,
  },
  colorRGB: {
    id: "generate-color-rgb",
    name: "Color RGB",
    description: "Generate color RGB",
    generateFunction: generateColorRGB,
    activeByDefault: false,
  },
  colorHLS: {
    id: "generate-color-hsl",
    name: "Color HSL",
    description: "Generate color HSL",
    generateFunction: generateColorHSL,
    activeByDefault: false,
  },
  creditCard: {
    id: "generate-credit-card",
    name: "Credit card",
    description: "Generate credit card",
    generateFunction: finance.generateCreditCard,
    activeByDefault: true,
  },
  creditCardCVV: {
    id: "generate-credit-card-cvv",
    name: "Credit card CVV",
    description: "Generate credit card CVV",
    generateFunction: finance.generateCreditCardCVV,
    activeByDefault: false,
  },
  creditCardIssuer: {
    id: "generate-credit-card-issuer",
    name: "Credit card Issuer",
    description: "Generate credit card Issuer",
    generateFunction: finance.generateCreditCardIssuer,
    activeByDefault: false,
  },
  businessName: {
    id: "generate-business-name",
    name: "Business name",
    description: "Generate business name",
    generateFunction: finance.generateBusinessName,
    activeByDefault: true,
  },
  businessCatchPhrase: {
    id: "generate-business-catchphrase",
    name: "Business catchphrase",
    description: "Generate catchphrase",
    generateFunction: finance.generateBusinessCatchPhrase,
    activeByDefault: false,
  },
  buzzphrase: {
    id: "generate-buzzphrase",
    name: "Buzzphrase",
    description: "Generate buzzphrase",
    generateFunction: finance.generateBuzzPhrase,
    activeByDefault: false,
  },
  databaseEngine: {
    id: "generate-database-engine",
    name: "Database engine",
    description: "Generate database engine",
    generateFunction: it_related.generateDatabaseEngine,
    activeByDefault: false,
  },
  databaseType: {
    id: "generate-database-type",
    name: "Database type",
    description: "Generate database type",
    generateFunction: it_related.generateDatabaseType,
    activeByDefault: false,
  },
  databaseColumn: {
    id: "generate-database-column",
    name: "Generate database column",
    description: "Generate database column name",
    generateFunction: it_related.generateDatabaseColumn,
    activeByDefault: false,
  },
  fileType: {
    id: "generate-filetype",
    name: "Generate filetype",
    description: "Generate filetype",
    generateFunction: it_related.generateFileType,
    activeByDefault: true,
  },
  directoryPath: {
    id: "generate-directory-path",
    name: "Generate directory path",
    description: "Generate directory path",
    generateFunction: it_related.generateDirectoryPath,
    activeByDefault: false,
  },
  ip: {
    id: "generate-ip",
    name: "Generate IP",
    description: "Generate IPv4",
    generateFunction: it_related.generateIP,
    activeByDefault: false,
  },
  emoji: {
    id: "generate-emoji",
    name: "Generate emoji",
    description: "Generate emoji",
    generateFunction: it_related.generateEmoji,
    activeByDefault: true,
  },
  url: {
    id: "generate-url",
    name: "Generate URL",
    description: "Generate URL",
    generateFunction: it_related.generateUrl,
    activeByDefault: false,
  },
};
