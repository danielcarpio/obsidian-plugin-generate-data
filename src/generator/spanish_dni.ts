export const generateSpanishDNI = () => {
  const dniNumber = Math.floor(Math.random() * 100000000);
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const dniLetter = letters[dniNumber % 23];
  return dniNumber.toString().padStart(8, "0") + dniLetter;
};
