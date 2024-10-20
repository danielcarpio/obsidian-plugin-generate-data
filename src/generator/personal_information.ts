import { faker } from "@faker-js/faker";

export const generateFirstName = () => {
  return faker.person.firstName();
};

export const generateLastName = () => {
  return faker.person.lastName();
};

export const generateJobTitle = () => {
  return faker.person.jobTitle();
};

export const generateSex = () => {
  return faker.person.sex();
};

export const generateZodiacSign = () => {
  return faker.person.zodiacSign();
};

export const generateSpanishDNI = () => {
  const dniNumber = Math.floor(Math.random() * 100000000);
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const dniLetter = letters[dniNumber % 23];
  return dniNumber.toString().padStart(8, "0") + dniLetter;
};

export const generateEmail = () => {
  return faker.internet.email();
};

export const generatePassword = () => {
  faker.internet.password();
};
