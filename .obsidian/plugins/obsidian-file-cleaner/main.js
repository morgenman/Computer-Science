/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
__export(exports, {
  default: () => FileCleanerPlugin
});
var import_obsidian4 = __toModule(require("obsidian"));

// src/settings.ts
var import_obsidian2 = __toModule(require("obsidian"));

// src/translations/helper.ts
var import_obsidian = __toModule(require("obsidian"));

// src/translations/locale/en.ts
var en_default = {
  "Clear files": "Clear files",
  "Regular Options": "Regular Options",
  "Cleaned files": "Cleaned files",
  "What do you want to do with cleaned files?": "What do you want to do with cleaned files?",
  "Move to system trash": "Move to system trash",
  "Move to Obsidian trash (.trash folder)": "Move to Obsidian trash (.trash folder)",
  "Permanently delete": "Permanently delete",
  "Clean successful": "Clean successful",
  "No file to clean": "No file to clean"
};

// src/translations/locale/zh-cn.ts
var zh_cn_default = {
  "Clear files": "\u6E05\u7406\u6587\u4EF6",
  "Regular Options": "\u5E38\u89C4\u9009\u9879",
  "Cleaned files": "\u6E05\u7406\u6587\u4EF6",
  "What do you want to do with cleaned files?": "\u8981\u5982\u4F55\u5904\u7406\u5DF2\u6E05\u7406\u7684\u6587\u4EF6\uFF1F",
  "Move to system trash": "\u79FB\u81F3\u7CFB\u7EDF\u56DE\u6536\u7AD9",
  "Move to Obsidian trash (.trash folder)": "\u79FB\u81F3\u8F6F\u4EF6\u56DE\u6536\u7AD9\uFF08.trash \u6587\u4EF6\u5939\uFF09",
  "Permanently delete": "\u6C38\u4E45\u5220\u9664",
  "Clean successful": "\u6E05\u7406\u6210\u529F",
  "No file to clean": "\u6CA1\u6709\u6587\u4EF6\u9700\u8981\u6E05\u7406"
};

// src/translations/helper.ts
var localeMap = {
  en: en_default,
  "zh-cn": zh_cn_default
};
var locale = localeMap[import_obsidian.moment.locale()];
function t(str) {
  return locale && locale[str] || en_default[str];
}

// src/settings.ts
var DEFAULT_SETTINGS = {
  destination: "system"
};
var FileCleanerSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    this.containerEl.empty();
    this.containerEl.createEl("h1", { text: t("Regular Options") });
    new import_obsidian2.Setting(containerEl).setName(t("Cleaned files")).setDesc(t("What do you want to do with cleaned files?")).addDropdown((dropdown) => dropdown.addOption("system", t("Move to system trash")).addOption("obsidian", t("Move to Obsidian trash (.trash folder)")).addOption("permanent", t("Permanently delete")).setValue(this.plugin.settings.destination).onChange((value) => {
      this.plugin.settings.destination = value;
      this.plugin.saveSettings();
    }));
  }
};

// src/util.ts
var import_obsidian3 = __toModule(require("obsidian"));
var getEmptyMdFiles = (app) => {
  let mdFiles = app.vault.getMarkdownFiles();
  let emptyMdFiles = [];
  for (let file of mdFiles) {
    if (file.stat.size === 0) {
      emptyMdFiles.push(file);
    }
  }
  return emptyMdFiles;
};
var getUnusedAttachments = (app) => {
  let files = app.vault.getFiles();
  const attachmentRegex = /(.jpg|.jpeg|.png|.gif|.svg|.pdf)$/i;
  let attachments = [];
  for (let file of files) {
    if (file.name.match(attachmentRegex)) {
      attachments.push(file);
    }
  }
  let usedAttachments = [];
  let resolvedLinks = app.metadataCache.resolvedLinks;
  if (resolvedLinks) {
    for (const [mdFile, links] of Object.entries(resolvedLinks)) {
      for (const [path, times] of Object.entries(resolvedLinks[mdFile])) {
        let attachmentMatch = path.match(attachmentRegex);
        if (attachmentMatch) {
          let file = app.vault.getAbstractFileByPath(path);
          usedAttachments.push(file);
        }
      }
    }
  }
  let unusedAttachments = attachments.filter((file) => !usedAttachments.includes(file));
  return unusedAttachments;
};
var clearFiles = (app, setting) => __async(void 0, null, function* () {
  let emptyMdFiles = getEmptyMdFiles(app);
  let unusedAttachments = getUnusedAttachments(app);
  let cleanFiles = [...emptyMdFiles, ...unusedAttachments];
  let len = cleanFiles.length;
  if (len > 0) {
    let destination = setting.destination;
    for (let file of cleanFiles) {
      console.log(file.name + " cleaned");
      if (destination === "permanent") {
        yield app.vault.delete(file);
      } else if (destination === "system") {
        yield app.vault.trash(file, true);
      } else if (destination === "obsidian") {
        yield app.vault.trash(file, false);
      }
    }
    new import_obsidian3.Notice(t("Clean successful"));
  } else {
    new import_obsidian3.Notice(t("No file to clean"));
  }
});

// src/index.ts
var FileCleanerPlugin = class extends import_obsidian4.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.addRibbonIcon("trash", t("Clear files"), (evt) => {
        clearFiles(this.app, this.settings);
      });
      this.addCommand({
        id: "clean-files",
        name: t("Clear files"),
        callback: () => {
          clearFiles(this.app, this.settings);
        }
      });
      this.addSettingTab(new FileCleanerSettingTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2luZGV4LnRzIiwgInNyYy9zZXR0aW5ncy50cyIsICJzcmMvdHJhbnNsYXRpb25zL2hlbHBlci50cyIsICJzcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9lbi50cyIsICJzcmMvdHJhbnNsYXRpb25zL2xvY2FsZS96aC1jbi50cyIsICJzcmMvdXRpbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcclxuXHRBcHAsXHJcblx0RWRpdG9yLFxyXG5cdE1hcmtkb3duVmlldyxcclxuXHRNb2RhbCxcclxuXHROb3RpY2UsXHJcblx0UGx1Z2luLFxyXG5cdFBsdWdpblNldHRpbmdUYWIsXHJcblx0U2V0dGluZyxcclxuXHRURmlsZSxcclxufSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuXHRGaWxlQ2xlYW5lclNldHRpbmdzLFxyXG5cdERFRkFVTFRfU0VUVElOR1MsXHJcblx0RmlsZUNsZWFuZXJTZXR0aW5nVGFiLFxyXG59IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGdldEVtcHR5TWRGaWxlcywgZ2V0VW51c2VkQXR0YWNobWVudHMsIGNsZWFyRmlsZXMgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi90cmFuc2xhdGlvbnMvaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ2xlYW5lclBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0cGx1Z2luOiBGaWxlQ2xlYW5lclBsdWdpbjtcclxuXHRzZXR0aW5nczogRmlsZUNsZWFuZXJTZXR0aW5ncztcclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHJcblx0XHR0aGlzLmFkZFJpYmJvbkljb24oXCJ0cmFzaFwiLCB0KFwiQ2xlYXIgZmlsZXNcIiksIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuXHRcdFx0Y2xlYXJGaWxlcyh0aGlzLmFwcCwgdGhpcy5zZXR0aW5ncyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJjbGVhbi1maWxlc1wiLFxyXG5cdFx0XHRuYW1lOiB0KFwiQ2xlYXIgZmlsZXNcIiksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYXJGaWxlcyh0aGlzLmFwcCwgdGhpcy5zZXR0aW5ncyk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IEZpbGVDbGVhbmVyU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcclxuXHRcdFx0e30sXHJcblx0XHRcdERFRkFVTFRfU0VUVElOR1MsXHJcblx0XHRcdGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG59XHJcbiIsICJpbXBvcnQge1xuXHRBcHAsXG5cdEVkaXRvcixcblx0TWFya2Rvd25WaWV3LFxuXHRNb2RhbCxcblx0Tm90aWNlLFxuXHRQbHVnaW4sXG5cdFBsdWdpblNldHRpbmdUYWIsXG5cdFNldHRpbmcsXG59IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IEZpbGVDbGVhbmVyUGx1Z2luIGZyb20gXCIuXCI7XG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4vdHJhbnNsYXRpb25zL2hlbHBlclwiO1xuXG4vL1x1NUI5QVx1NEU0OVx1OEJCRVx1N0Y2RVx1NjNBNVx1NTNFM1xuZXhwb3J0IGludGVyZmFjZSBGaWxlQ2xlYW5lclNldHRpbmdzIHtcblx0ZGVzdGluYXRpb246IHN0cmluZztcbn1cblxuLy9cdTVCOUFcdTRFNDlcdTlFRDhcdThCQTRcdThCQkVcdTdGNkVcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBGaWxlQ2xlYW5lclNldHRpbmdzID0ge1xuXHRkZXN0aW5hdGlvbjogXCJzeXN0ZW1cIixcbn07XG5cbi8vXHU4QkJFXHU3RjZFXHU5MDA5XHU5ODc5XHU1MzYxXG5leHBvcnQgY2xhc3MgRmlsZUNsZWFuZXJTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogRmlsZUNsZWFuZXJQbHVnaW47XG5cblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogRmlsZUNsZWFuZXJQbHVnaW4pIHtcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRkaXNwbGF5KCk6IHZvaWQge1xuXHRcdGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cdFx0dGhpcy5jb250YWluZXJFbC5lbXB0eSgpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbC5jcmVhdGVFbChcImgxXCIsIHsgdGV4dDogdChcIlJlZ3VsYXIgT3B0aW9uc1wiKSB9KTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUodChcIkNsZWFuZWQgZmlsZXNcIikpXG5cdFx0XHQuc2V0RGVzYyh0KFwiV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIGNsZWFuZWQgZmlsZXM/XCIpKVxuXHRcdFx0LmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cblx0XHRcdFx0ZHJvcGRvd25cblx0XHRcdFx0XHQuYWRkT3B0aW9uKFwic3lzdGVtXCIsIHQoXCJNb3ZlIHRvIHN5c3RlbSB0cmFzaFwiKSlcblx0XHRcdFx0XHQuYWRkT3B0aW9uKFxuXHRcdFx0XHRcdFx0XCJvYnNpZGlhblwiLFxuXHRcdFx0XHRcdFx0dChcIk1vdmUgdG8gT2JzaWRpYW4gdHJhc2ggKC50cmFzaCBmb2xkZXIpXCIpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5hZGRPcHRpb24oXCJwZXJtYW5lbnRcIiwgdChcIlBlcm1hbmVudGx5IGRlbGV0ZVwiKSlcblx0XHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVzdGluYXRpb24pXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVzdGluYXRpb24gPSB2YWx1ZTtcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgbW9tZW50IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgZW4gZnJvbSBcIi4vbG9jYWxlL2VuXCI7XG5pbXBvcnQgemhDTiBmcm9tIFwiLi9sb2NhbGUvemgtY25cIjtcblxuY29uc3QgbG9jYWxlTWFwOiB7IFtrOiBzdHJpbmddOiBQYXJ0aWFsPHR5cGVvZiBlbj4gfSA9IHtcblx0ZW4sXG5cdFwiemgtY25cIjogemhDTixcbn07XG5cbmNvbnN0IGxvY2FsZSA9IGxvY2FsZU1hcFttb21lbnQubG9jYWxlKCldO1xuXG5leHBvcnQgZnVuY3Rpb24gdChzdHI6IGtleW9mIHR5cGVvZiBlbik6IHN0cmluZyB7XG5cdHJldHVybiAobG9jYWxlICYmIGxvY2FsZVtzdHJdKSB8fCBlbltzdHJdO1xufVxuIiwgIi8vRW5nbGlzaFxuZXhwb3J0IGRlZmF1bHQge1xuXHRcIkNsZWFyIGZpbGVzXCI6IFwiQ2xlYXIgZmlsZXNcIixcblxuXHRcIlJlZ3VsYXIgT3B0aW9uc1wiOiBcIlJlZ3VsYXIgT3B0aW9uc1wiLFxuXHRcIkNsZWFuZWQgZmlsZXNcIjogXCJDbGVhbmVkIGZpbGVzXCIsXG5cdFwiV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIGNsZWFuZWQgZmlsZXM/XCI6XG5cdFx0XCJXaGF0IGRvIHlvdSB3YW50IHRvIGRvIHdpdGggY2xlYW5lZCBmaWxlcz9cIixcblx0XCJNb3ZlIHRvIHN5c3RlbSB0cmFzaFwiOiBcIk1vdmUgdG8gc3lzdGVtIHRyYXNoXCIsXG5cdFwiTW92ZSB0byBPYnNpZGlhbiB0cmFzaCAoLnRyYXNoIGZvbGRlcilcIjpcblx0XHRcIk1vdmUgdG8gT2JzaWRpYW4gdHJhc2ggKC50cmFzaCBmb2xkZXIpXCIsXG5cdFwiUGVybWFuZW50bHkgZGVsZXRlXCI6IFwiUGVybWFuZW50bHkgZGVsZXRlXCIsXG5cdFwiQ2xlYW4gc3VjY2Vzc2Z1bFwiOiBcIkNsZWFuIHN1Y2Nlc3NmdWxcIixcblx0XCJObyBmaWxlIHRvIGNsZWFuXCI6IFwiTm8gZmlsZSB0byBjbGVhblwiLFxufTtcbiIsICIvL1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4N1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcIkNsZWFyIGZpbGVzXCI6IFwiXHU2RTA1XHU3NDA2XHU2NTg3XHU0RUY2XCIsXG5cblx0XCJSZWd1bGFyIE9wdGlvbnNcIjogXCJcdTVFMzhcdTg5QzRcdTkwMDlcdTk4NzlcIixcblx0XCJDbGVhbmVkIGZpbGVzXCI6IFwiXHU2RTA1XHU3NDA2XHU2NTg3XHU0RUY2XCIsXG5cdFwiV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIGNsZWFuZWQgZmlsZXM/XCI6IFwiXHU4OTgxXHU1OTgyXHU0RjU1XHU1OTA0XHU3NDA2XHU1REYyXHU2RTA1XHU3NDA2XHU3Njg0XHU2NTg3XHU0RUY2XHVGRjFGXCIsXG5cdFwiTW92ZSB0byBzeXN0ZW0gdHJhc2hcIjogXCJcdTc5RkJcdTgxRjNcdTdDRkJcdTdFREZcdTU2REVcdTY1MzZcdTdBRDlcIixcblx0XCJNb3ZlIHRvIE9ic2lkaWFuIHRyYXNoICgudHJhc2ggZm9sZGVyKVwiOiBcIlx1NzlGQlx1ODFGM1x1OEY2Rlx1NEVGNlx1NTZERVx1NjUzNlx1N0FEOVx1RkYwOC50cmFzaCBcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMDlcIixcblx0XCJQZXJtYW5lbnRseSBkZWxldGVcIjogXCJcdTZDMzhcdTRFNDVcdTUyMjBcdTk2NjRcIixcblx0XCJDbGVhbiBzdWNjZXNzZnVsXCI6IFwiXHU2RTA1XHU3NDA2XHU2MjEwXHU1MjlGXCIsXG5cdFwiTm8gZmlsZSB0byBjbGVhblwiOiBcIlx1NkNBMVx1NjcwOVx1NjU4N1x1NEVGNlx1OTcwMFx1ODk4MVx1NkUwNVx1NzQwNlwiLFxufTtcbiIsICJpbXBvcnQge1xuXHRBcHAsXG5cdEVkaXRvcixcblx0TWFya2Rvd25WaWV3LFxuXHRNb2RhbCxcblx0Tm90aWNlLFxuXHRQbHVnaW4sXG5cdFBsdWdpblNldHRpbmdUYWIsXG5cdFNldHRpbmcsXG5cdFRGaWxlLFxufSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IEZpbGVDbGVhbmVyU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuL3RyYW5zbGF0aW9ucy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldEVtcHR5TWRGaWxlcyA9IChhcHA6IEFwcCkgPT4ge1xuXHQvLyBcdTgzQjdcdTUzRDZNYXJrZG93blx1NjU4N1x1NEVGNlxuXHRsZXQgbWRGaWxlcyA9IGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG5cblx0Ly8gXHU4M0I3XHU1M0Q2XHU3QTdBXHU3NjdETWFya2Rvd25cdTY1ODdcdTRFRjZcblx0bGV0IGVtcHR5TWRGaWxlczogVEZpbGVbXSA9IFtdO1xuXHRmb3IgKGxldCBmaWxlIG9mIG1kRmlsZXMpIHtcblx0XHRpZiAoZmlsZS5zdGF0LnNpemUgPT09IDApIHtcblx0XHRcdGVtcHR5TWRGaWxlcy5wdXNoKGZpbGUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZW1wdHlNZEZpbGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVudXNlZEF0dGFjaG1lbnRzID0gKGFwcDogQXBwKSA9PiB7XG5cdC8vIFx1ODNCN1x1NTNENlx1OTY0NFx1NEVGNlxuXHRsZXQgZmlsZXMgPSBhcHAudmF1bHQuZ2V0RmlsZXMoKTtcblx0Y29uc3QgYXR0YWNobWVudFJlZ2V4ID0gLyguanBnfC5qcGVnfC5wbmd8LmdpZnwuc3ZnfC5wZGYpJC9pO1xuXHRsZXQgYXR0YWNobWVudHM6IFRGaWxlW10gPSBbXTtcblx0Zm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuXHRcdGlmIChmaWxlLm5hbWUubWF0Y2goYXR0YWNobWVudFJlZ2V4KSkge1xuXHRcdFx0YXR0YWNobWVudHMucHVzaChmaWxlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBcdTgzQjdcdTUzRDZcdTVERjJcdTRGN0ZcdTc1MjhcdTk2NDRcdTRFRjZcblx0bGV0IHVzZWRBdHRhY2htZW50czogYW55ID0gW107XG5cdGxldCByZXNvbHZlZExpbmtzID0gYXBwLm1ldGFkYXRhQ2FjaGUucmVzb2x2ZWRMaW5rcztcblx0aWYgKHJlc29sdmVkTGlua3MpIHtcblx0XHRmb3IgKGNvbnN0IFttZEZpbGUsIGxpbmtzXSBvZiBPYmplY3QuZW50cmllcyhyZXNvbHZlZExpbmtzKSkge1xuXHRcdFx0Zm9yIChjb25zdCBbcGF0aCwgdGltZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJlc29sdmVkTGlua3NbbWRGaWxlXSkpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnRNYXRjaCA9IHBhdGgubWF0Y2goYXR0YWNobWVudFJlZ2V4KTtcblx0XHRcdFx0aWYgKGF0dGFjaG1lbnRNYXRjaCkge1xuXHRcdFx0XHRcdGxldCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcblx0XHRcdFx0XHR1c2VkQXR0YWNobWVudHMucHVzaChmaWxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFx1ODNCN1x1NTNENlx1NjcyQVx1NEY3Rlx1NzUyOFx1OTY0NFx1NEVGNlxuXHRsZXQgdW51c2VkQXR0YWNobWVudHMgPSBhdHRhY2htZW50cy5maWx0ZXIoXG5cdFx0KGZpbGUpID0+ICF1c2VkQXR0YWNobWVudHMuaW5jbHVkZXMoZmlsZSlcblx0KTtcblxuXHRyZXR1cm4gdW51c2VkQXR0YWNobWVudHM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RXhjbHVkZWRGaWxlcyA9IGFzeW5jIChcblx0YXBwOiBBcHAsXG5cdHNldHRpbmc6IEZpbGVDbGVhbmVyU2V0dGluZ3NcbikgPT4ge1xuXHQvLyBcdTVGODVcdTVCOENcdTYyMTBcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckZpbGVzID0gYXN5bmMgKGFwcDogQXBwLCBzZXR0aW5nOiBGaWxlQ2xlYW5lclNldHRpbmdzKSA9PiB7XG5cdC8vIFx1ODNCN1x1NTNENlx1NkUwNVx1NzQwNlx1NjU4N1x1NEVGNlxuXHRsZXQgZW1wdHlNZEZpbGVzID0gZ2V0RW1wdHlNZEZpbGVzKGFwcCk7XG5cdGxldCB1bnVzZWRBdHRhY2htZW50cyA9IGdldFVudXNlZEF0dGFjaG1lbnRzKGFwcCk7XG5cdGxldCBjbGVhbkZpbGVzOiBURmlsZVtdID0gWy4uLmVtcHR5TWRGaWxlcywgLi4udW51c2VkQXR0YWNobWVudHNdO1xuXG5cdC8vIFx1NjI2N1x1ODg0Q1x1NkUwNVx1NzQwNlxuXHRsZXQgbGVuID0gY2xlYW5GaWxlcy5sZW5ndGg7XG5cdGlmIChsZW4gPiAwKSB7XG5cdFx0bGV0IGRlc3RpbmF0aW9uID0gc2V0dGluZy5kZXN0aW5hdGlvbjtcblx0XHRmb3IgKGxldCBmaWxlIG9mIGNsZWFuRmlsZXMpIHtcblx0XHRcdGNvbnNvbGUubG9nKGZpbGUubmFtZSArIFwiIGNsZWFuZWRcIik7XG5cdFx0XHRpZiAoZGVzdGluYXRpb24gPT09IFwicGVybWFuZW50XCIpIHtcblx0XHRcdFx0YXdhaXQgYXBwLnZhdWx0LmRlbGV0ZShmaWxlKTtcblx0XHRcdH0gZWxzZSBpZiAoZGVzdGluYXRpb24gPT09IFwic3lzdGVtXCIpIHtcblx0XHRcdFx0YXdhaXQgYXBwLnZhdWx0LnRyYXNoKGZpbGUsIHRydWUpO1xuXHRcdFx0fSBlbHNlIGlmIChkZXN0aW5hdGlvbiA9PT0gXCJvYnNpZGlhblwiKSB7XG5cdFx0XHRcdGF3YWl0IGFwcC52YXVsdC50cmFzaChmaWxlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5ldyBOb3RpY2UodChcIkNsZWFuIHN1Y2Nlc3NmdWxcIikpO1xuXHR9IGVsc2Uge1xuXHRcdG5ldyBOb3RpY2UodChcIk5vIGZpbGUgdG8gY2xlYW5cIikpO1xuXHR9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFVTzs7O0FDVlAsdUJBU087OztBQ1RQLHNCQUF1Qjs7O0FDQ3ZCLElBQU8sYUFBUTtBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBRWYsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsOENBQ0M7QUFBQSxFQUNELHdCQUF3QjtBQUFBLEVBQ3hCLDBDQUNDO0FBQUEsRUFDRCxzQkFBc0I7QUFBQSxFQUN0QixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFBQTs7O0FDWnJCLElBQU8sZ0JBQVE7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUVmLG1CQUFtQjtBQUFBLEVBQ25CLGlCQUFpQjtBQUFBLEVBQ2pCLDhDQUE4QztBQUFBLEVBQzlDLHdCQUF3QjtBQUFBLEVBQ3hCLDBDQUEwQztBQUFBLEVBQzFDLHNCQUFzQjtBQUFBLEVBQ3RCLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUFBOzs7QUZQckIsSUFBTSxZQUFpRDtBQUFBLEVBQ3REO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFHVixJQUFNLFNBQVMsVUFBVSx1QkFBTztBQUV6QixXQUFXLEtBQThCO0FBQy9DLFNBQVEsVUFBVSxPQUFPLFFBQVMsV0FBRztBQUFBOzs7QURPL0IsSUFBTSxtQkFBd0M7QUFBQSxFQUNwRCxhQUFhO0FBQUE7QUFJUCwwQ0FBb0Msa0NBQWlCO0FBQUEsRUFHM0QsWUFBWSxLQUFVLFFBQTJCO0FBQ2hELFVBQU0sS0FBSztBQUNYLFNBQUssU0FBUztBQUFBO0FBQUEsRUFHZixVQUFnQjtBQUNmLFVB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