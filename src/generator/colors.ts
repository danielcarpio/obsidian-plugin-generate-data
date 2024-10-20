import { faker } from "@faker-js/faker";

export const generateColorRGB = () => {
  return faker.color.rgb();
};

export const generateColorHSL = () => {
  return faker.color.hsl();
};
