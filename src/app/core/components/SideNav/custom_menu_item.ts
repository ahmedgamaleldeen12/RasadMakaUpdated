export interface CustomMenuItem {
  name: string;
  url?: string;
  iconUrl?: string;
  roleIds?: number[];
  isChild?: boolean;
  index?: number;
  children?: CustomMenuItem[] | null | undefined;
}
