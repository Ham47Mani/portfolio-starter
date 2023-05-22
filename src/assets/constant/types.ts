// ------------------- NavItem Type -------------------
export type navItemType = {
  link: string,
  icons: React.ReactElement
}

// ------------------- Social Icons Type -------------------
export type socialType = {
  link: string,
  icons: React.ReactElement
}


// ------------------- Stats Item Type -------------------
export type statsItemType = {
  start: number,
  end: number,
  text: JSX.Element,
  k?: "k+"
}

// ------------------- Services Type -------------------
export interface servicesType {
  name: string;
  desc: string;
  link: string;
}

// ------------------- Work Item Type -------------------
export interface workItemType {
  title: string;
  preTitle: string;
  imgSrc: string;
}

// -------------------  Type -------------------