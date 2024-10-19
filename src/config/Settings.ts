import { ConfigGeneration } from "./Configuration";

export type SettingsConfig = {
  esCups: boolean;
  esDNI: boolean;
  esIBAN: boolean;
};

export const DEFAULT_SETTINGS: Partial<SettingsConfig> = {};

Object.keys(ConfigGeneration).forEach((configKey: keyof SettingsConfig) => {
  DEFAULT_SETTINGS[configKey] = ConfigGeneration[configKey]["activeByDefault"];
});
