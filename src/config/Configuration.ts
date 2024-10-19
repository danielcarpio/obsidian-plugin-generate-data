import { generateSpanishCUPS } from "src/generator/spanish_cups";
import * as personalInformation from "src/generator/personal_information";
import { generateIBAN } from "src/generator/iban";

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
    generateFunction: personalInformation.generateFirstName,
    activeByDefault: true,
  },
  lastName: {
    id: "generate-last-name",
    name: "Last name",
    description: "Generate last name",
    generateFunction: personalInformation.generateLastName,
    activeByDefault: true,
  },
  jobTitle: {
    id: "generate-job-title",
    name: "Job title",
    description: "Generate job title",
    generateFunction: personalInformation.generateJobTitle,
    activeByDefault: true,
  },
  sex: {
    id: "generate-sex",
    name: "Sex",
    description: "Generate sex",
    generateFunction: personalInformation.generateSex,
    activeByDefault: true,
  },
  zodiacSign: {
    id: "generate-zodiac-sign",
    name: "Zodiac sign",
    description: "Generate zodiac sign",
    generateFunction: personalInformation.generateZodiacSign,
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
    generateFunction: personalInformation.generateSpanishDNI,
    activeByDefault: false,
  },
  iban: {
    id: "generate-iban",
    name: "IBAN",
    description: "Generate IBAN",
    generateFunction: generateIBAN,
    activeByDefault: false,
  },
};
