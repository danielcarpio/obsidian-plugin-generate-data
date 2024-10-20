import { Plugin, WorkspaceLeaf } from "obsidian";
import { DataGeneratorModal } from "src/ui/data-generator-modal";
import { DASHBOARD_VIEW_TYPE, DashboardView } from "src/ui/dashboard-view";
import { ConfigGeneration } from "src/config/Configuration";
import { DEFAULT_SETTINGS, SettingsConfig } from "src/config/Settings";
import { DataGeneratorSettingTab } from "src/config/DataGeneratorSettingTab";

export default class DataGenerator extends Plugin {
  settings: SettingsConfig;
  private viewRegistered = false;
  private commandsRegistered: Array<String> = [];

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new DataGeneratorSettingTab(this.app, this));

    this.createCommands();
    if (!this.viewRegistered) this.registerDashboardView();
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  private createCommands() {
    for (const configKey of Object.keys(ConfigGeneration)) {
      const { id, name, generateFunction } = ConfigGeneration[configKey];
      const isActiveInSettings = this.settings[configKey];
      const isRegistered = this.commandsRegistered.contains(id);

      if (!isRegistered && isActiveInSettings) {
        this.addCommand({
          id,
          name: `Generate ${name}`,
          callback: () => {
            new DataGeneratorModal(this.app, name, generateFunction()).open();
          },
        });
        this.commandsRegistered.push(id);
        continue;
      }

      if (isRegistered && !isActiveInSettings) {
        this.removeCommand(id);
        const index = this.commandsRegistered.indexOf(id);
        if (index !== -1) {
          this.commandsRegistered.splice(index, 1);
        }
      }
    }
  }

  private registerDashboardView() {
    this.registerView(
      DASHBOARD_VIEW_TYPE,
      (leaf) => new DashboardView(leaf, this)
    );
    this.viewRegistered = true;
    const ribbonIconEl = this.addRibbonIcon("dice", "DataGenerator", () => {
      this.openDashboardHtmlPage();
    });
    ribbonIconEl.addClass("data-generator-ribbon-class");
  }

  private openDashboardHtmlPage() {
    const { workspace } = this.app;

    let leaf: WorkspaceLeaf | null = null;
    const leaves = workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE);

    if (leaves.length > 0) {
      leaf = leaves[0];
      DashboardView.generateHTML(this, leaf.view.containerEl.children[1]);
    } else {
      leaf = workspace.getRightLeaf(false);
      if (!leaf) return;
      leaf.setViewState({
        type: DASHBOARD_VIEW_TYPE,
        active: true,
      });
    }

    workspace.revealLeaf(leaf);
  }
}
