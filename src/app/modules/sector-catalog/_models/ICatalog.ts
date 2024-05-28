export interface ICatalog {
  Companies: Company[];
}

export interface Company {
  Code: string;
  Name: string;
  Origin?: string;
  Folders: Folder[];
}

export interface Folder {
  FolderGuid: string;
  Type: string;
  Name: string;
  Domain: string;
  Targets: string[];
  FolderDescription: FolderDescription;
  Items: Item[];
}

export interface Item {
  Category: string;
  Name: string;
  SubCategory: string;
  Language: string;
  Width?: (null | number)[];
  Height?: (null | number)[];
  Url: string;
  Description: string;
  Guid: string;
  DisplayMode?: string;
}

export interface FolderDescription {
  FR: string;
  NL: string;
  EN: string;
  DE: string;
}
