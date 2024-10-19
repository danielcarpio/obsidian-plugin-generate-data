import DataGenerator from "main";
import {
  App,
  DropdownComponent,
  PluginSettingTab,
  Setting,
  TextComponent,
  ToggleComponent,
} from "obsidian";
import { ConfigGeneration } from "./Configuration";
import { SettingsConfig } from "./Settings";
import { faker } from "@faker-js/faker";
import { COUNTRY_CODE } from "src/generator/utils/country_codes";

export class DataGeneratorSettingTab extends PluginSettingTab {
  plugin: DataGenerator;
  public static COUNTRY_CODE = "ES";

  constructor(app: App, plugin: DataGenerator) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Select country code")
      .setDesc(
        "Select the country code to be used for data generation, such as for IBAN (e.g., 'ES'). If none is provided, a random country will be selected."
      )
      .addDropdown((dropDownComponent: DropdownComponent) => {
        dropDownComponent.addOptions(
          COUNTRY_CODE.reduce((acc, curr) => {
            acc[curr] = curr;
            return acc;
          }, <Record<string, string>>{})
        );
        const currentValue = this.plugin.settings["countryCode"];
        dropDownComponent.setValue(currentValue);
        DataGeneratorSettingTab.COUNTRY_CODE = currentValue;

        dropDownComponent.onChange(async (value) => {
          this.plugin.settings["countryCode"] = value;
          DataGeneratorSettingTab.COUNTRY_CODE = value;
          await this.plugin.saveSettings();
          await this.plugin.onload();
        });
      });

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
