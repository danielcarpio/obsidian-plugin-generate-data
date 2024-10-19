import DataGenerator from "main";
import { App, PluginSettingTab, Setting, ToggleComponent } from "obsidian";
import { ConfigGeneration } from "./Configuration";
import { SettingsConfig } from "./Settings";

export class SettingTab extends PluginSettingTab {
  plugin: DataGenerator;

  constructor(app: App, plugin: DataGenerator) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    for (const configKey of Object.keys(ConfigGeneration)) {
      const configItem = ConfigGeneration[configKey];
      new Setting(containerEl)
        .setName(configItem.name)
        .setDesc(configItem.description)
        .addToggle((toggle: ToggleComponent) => {
          toggle
            .setValue(this.plugin.settings[configKey as keyof SettingsConfig])
            .onChange(async (value) => {
              this.plugin.settings[configKey as keyof SettingsConfig] = value;
              await this.plugin.saveSettings();
              await this.plugin.onload();
            });
        });
    }
  }
}
