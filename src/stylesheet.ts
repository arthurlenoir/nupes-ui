export enum NupesColors {
  GREEN = "rgb(52,173,108)",
  YELLOW = "rgb(255,236,0)",
  RED = "rgb(245,59,59)",
  PINK = "rgb(248,49,160)",
  PURPLE = "rgb(80,37,130)",
}

export enum LightNupesColors {
  GREEN = "rgb(149,212,178)",
  YELLOW = "rgb(255,236,0)", //TODO
  RED = "rgb(245,59,59)", //TODO
  PINK = "rgb(248,49,160)", //TODO
  PURPLE = "#c0b0d2",
}

export enum OtherColors {
  WHITE = "rgb(255, 255, 255)",
  BLACK = "rgb(0, 0, 0)",
}

export type Colors = NupesColors | OtherColors;

const complementaryColors: Record<NupesColors, Colors> = {
  [NupesColors.GREEN]: OtherColors.WHITE,
  [NupesColors.YELLOW]: OtherColors.BLACK,
  [NupesColors.RED]: OtherColors.WHITE,
  [NupesColors.PINK]: OtherColors.WHITE,
  [NupesColors.PURPLE]: OtherColors.WHITE,
};

const ligherColors: Record<NupesColors, LightNupesColors> = {
  [NupesColors.GREEN]: LightNupesColors.GREEN,
  [NupesColors.YELLOW]: LightNupesColors.YELLOW,
  [NupesColors.RED]: LightNupesColors.RED,
  [NupesColors.PINK]: LightNupesColors.PINK,
  [NupesColors.PURPLE]: LightNupesColors.PURPLE,
};

export const getComplentaryColor = (color: NupesColors) =>
  complementaryColors[color];

export const getLightColor = (color: NupesColors) => ligherColors[color];
