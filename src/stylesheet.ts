export enum NupesColors {
  GREEN = "#4BB166",
  YELLOW = "#FFEC00",
  RED = "#EF1926",
  PINK = "#E6255B",
  PURPLE = "#9A36E0",
}

export enum LightNupesColors {
  GREEN = "#4BB1667F",
  YELLOW = "#FFEC007F",
  RED = "#EF19267F",
  PINK = "#E6255B7F",
  PURPLE = "#9A36E07F",
}

export enum OtherColors {
  WHITE = "rgb(255, 255, 255)",
  BLACK = "#1D1D1B",
}

export type Colors = NupesColors | OtherColors;

const complementaryColors: Record<NupesColors, Colors> = {
  [NupesColors.GREEN]: OtherColors.WHITE,
  [NupesColors.YELLOW]: OtherColors.BLACK,
  [NupesColors.RED]: OtherColors.WHITE,
  [NupesColors.PINK]: OtherColors.BLACK,
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

export const transitions = {
  fast: `100ms ease-in-out`,
  default: `200ms ease-in-out`,
  delayed: `0s linear 200ms`,
};
