export interface Theme {
  colors: {
    bg: string;
    text: string;
    menuBg: string;
    menuText: string;
    menuActiveText: string;
    border: string;
    grey: string;
    white: string;
    black: string;
  };
  gradients: {
    whiteToBlack: string;
  };
}

export const lightTheme = {
  colors: {
    bg: "#ffffff",
    text: "#000000",
    menuBg: "#ffff4d",
    menuText: "",
    menuActiveText: "",
    border: "",
    grey: "#b3b3b3",
    white: "#ffffff",
    black: "#000000",
  },
  gradients: {
    whiteToBlack:
      "linear-gradient(89deg, rgba(255, 255, 255, 0.8) 10%, rgba(0, 0, 0, 0.8) 100%)",
  },
};

export const darkTheme = {
  colors: {
    bg: "#000000",
    text: "#ffffff",
    menuBg: "#fdf84c",
    menuText: "#000000",
    menuActiveText: "#66ffff",
    border: "#666666",
    grey: "#b3b3b3",
    white: "#ffffff",
    black: "#000000",
  },
  gradients: {
    whiteToBlack:
      "linear-gradient(89deg, rgba(255, 255, 255, 0.8) 10%, rgba(0, 0, 0, 0.8) 100%)",
  },
};
