import { ConfigGeneration } from "./Configuration";

export type SettingsConfig = {
  [K in keyof typeof ConfigGeneration]: boolean;
};

export const DEFAULT_SETTINGS: Partial<SettingsConfig> = {};

Object.keys(ConfigGeneration).forEach((configKey: keyof SettingsConfig) => {
  DEFAULT_SETTINGS[configKey] = ConfigGeneration[configKey]["activeByDefault"];
});
