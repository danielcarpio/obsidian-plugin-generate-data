import { generateSpanishCUPS } from "src/generator/spanish_cups";
import { generateSpanishDNI } from "src/generator/spanish_dni";
import { generateSpanishIBAN } from "src/generator/spanish_iban";

type ConfigData = {
  id: string;
  name: string;
  description: string;
  generateFunction: Function;
  activeByDefault: boolean;
};

export const ConfigGeneration = <Record<string, ConfigData>>{
  esCups: {
    id: "generate-spanish-cups",
    name: "Spanish Cups",
    description: "Spanish Cups",
    generateFunction: generateSpanishCUPS,
    activeByDefault: true,
  },
  esDNI: {
    id: "generate-spanish-dni",
    name: "Spanish DNI",
    description: "Spanish DNI",
    generateFunction: generateSpanishDNI,
    activeByDefault: true,
  },
  esIBAN: {
    id: "generate-spanish-iban",
    name: "Spanish IBAN",
    description: "Spanish IBAN",
    generateFunction: generateSpanishIBAN,
    activeByDefault: false,
  },
};
