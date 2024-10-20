import { AnimalModule, faker } from "@faker-js/faker";

export const generateAnimalType = () => {
  return faker.animal.type();
};

export const generateAnimal = () => {
  return faker.animal[generateAnimalType() as keyof AnimalModule]();
};
