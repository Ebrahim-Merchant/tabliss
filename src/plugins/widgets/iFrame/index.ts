import { Config } from "../../types";
import iFrame from "./iFrame";
import iFrameSettings from "./iFramsSettings";

const config: Config = {
  key: "widget/iframe",
  name: "Custom iFrame",
  description: "Make your new tab more style-ish (advanced users).",
  dashboardComponent: iFrame,
  settingsComponent: iFrameSettings,
};

export default config;
