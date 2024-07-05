import { IPlugin } from "@models";

export interface IDeckPluginItemProps {
  plugin: IPlugin;
  active: boolean;
  onToggle: () => void;
  onOpen: () => void;
}
