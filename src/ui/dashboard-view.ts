import { ItemView, Notice, WorkspaceLeaf } from "obsidian";
import { generateDashboardHTML } from "./dashboard";
import { ConfigGeneration } from "src/config/Configuration";
import DataGenerator from "main";
import { SettingsConfig } from "src/config/Settings";

export const DASHBOARD_VIEW_TYPE = "generate-data-dashboard";

export class DashboardView extends ItemView {
  title: string;
  plugin: DataGenerator;

  constructor(leaf: WorkspaceLeaf, plugin: DataGenerator) {
    super(leaf);
    this.title = "Generate data";
    this.plugin = plugin;
  }

  getDisplayText() {
    return this.title;
  }

  getViewType(): string {
    return DASHBOARD_VIEW_TYPE;
  }

  static generateHTML(plugin: DataGenerator, container: Element) {
    const addCopyFunctionality = (
      container: Element,
      key: string,
      name: string
    ) => {
      const input = container.querySelector(`#${key}`) as HTMLInputElement;
      const copyButton = container.querySelector(
        `#copy_${key}`
      ) as HTMLButtonElement;

      copyButton.addEventListener("click", () => {
        navigator.clipboard
          .writeText(input.value)
          .then(() => {
            new Notice(`${name} added to clipboard`);
          })
          .catch((err) => {
            console.error(`Error copying ${key} to clipboard: `, err);
          });
      });
    };

    container.innerHTML = generateDashboardHTML(plugin);

    const config = ConfigGeneration;
    Object.keys(config)
      .filter((configKey) => plugin.settings[configKey as keyof SettingsConfig])
      .map((configKey) => {
        addCopyFunctionality(container, configKey, config[configKey]["name"]);
      });

    const regenerateButton = container.querySelector(
      "#regenerate"
    ) as HTMLButtonElement;
    regenerateButton.addEventListener("click", () => {
      this.generateHTML(plugin, container);
    });
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    DashboardView.generateHTML(this.plugin, container);
  }
}
