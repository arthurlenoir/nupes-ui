export enum NupesColors {
  GREEN = "rgb(52,173,108)",
  YELLOW = "rgb(255,236,0)",
  RED = "rgb(245,59,59)",
  PINK = "rgb(248,49,160)",
  PURPLE = "rgb(80,37,130)",
}

enum OtherColors {
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

export const getComplentaryColor = (color: NupesColors) =>
  complementaryColors[color];
