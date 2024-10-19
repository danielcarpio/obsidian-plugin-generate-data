import DataGenerator from "main";
import { ConfigGeneration } from "src/config/Configuration";
import { SettingsConfig } from "src/config/Settings";

const blockTemplate = (key: string, name: string, value: string) => {
  return `<p>${name}</p>
    <input type="text" id="${key}" value="${value}" readonly>
    <button id="copy_${key}">Copiar</button>
    `;
};

export const generateDashboardHTML = (plugin: DataGenerator) => {
  const config = ConfigGeneration;
  const dataShowBlock = Object.keys(config)
    .filter((configKey) => plugin.settings[configKey as keyof SettingsConfig])
    .map((configKey) => {
      return blockTemplate(
        configKey,
        config[configKey]["name"],
        config[configKey]["generateFunction"]()
      );
    })
    .join("");

  return `<h1>Data generator</h1>
    <button id="regenerate">REGENERATE</button>
    ${dataShowBlock}`;
};
