import { ConfigGeneration } from "./Configuration";

export type SettingsConfig = {
  [K in keyof typeof ConfigGeneration]: boolean;
} & {
  countryCode: string;
};

export const DEFAULT_SETTINGS: Partial<SettingsConfig> = {};
DEFAULT_SETTINGS["countryCode"] = "ES";

Object.keys(ConfigGeneration).forEach((configKey: keyof SettingsConfig) => {
  DEFAULT_SETTINGS[configKey] = ConfigGeneration[configKey]["activeByDefault"];
});
