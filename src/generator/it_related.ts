import { faker } from "@faker-js/faker";

export const generateDatabaseEngine = () => {
  return faker.database.engine();
};

export const generateDatabaseType = () => {
  return faker.database.type();
};

export const generateDatabaseColumn = () => {
  return faker.database.column();
};

export const generateFileType = () => {
  return faker.system.fileType();
};

export const generateDirectoryPath = () => {
  return faker.system.directoryPath();
};

export const generateIP = () => {
  return faker.internet.ipv4();
};

export const generateEmoji = () => {
  return faker.internet.emoji();
};

export const generateUrl = () => {
  return faker.internet.url();
};
