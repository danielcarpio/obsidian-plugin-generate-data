import { App, Modal, Notice } from "obsidian";

export class DataGeneratorModal extends Modal {
  typeGenerated: string;
  value: string;
  allowCopy: boolean;

  constructor(app: App, typeGenerate: string, value: string, allowCopy = true) {
    super(app);
    this.typeGenerated = typeGenerate;
    this.value = value;
    this.allowCopy = allowCopy;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: `${this.typeGenerated} generated` });

    const textContainer = contentEl.createDiv({
      cls: ["modal-value", "text-container"],
    });
    textContainer.createEl("span", {
      text: this.value,
      cls: ["modal-value", "text-value"],
    });

    const copyButton = textContainer.createEl("button", {
      text: "Copy",
      cls: ["modal-value", "copy-button"],
    });

    copyButton.addEventListener("click", () => {
      this.copyToClipboard(this.value);
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }

  copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        new Notice(`${this.typeGenerated} added to clipboard`);
      })
      .catch((err) => {
        console.error("Error when copying to clipboard: ", err);
      });
  }
}
