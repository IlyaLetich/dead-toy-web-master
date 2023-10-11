const colors ={
    background: "#F8F4F4",
    foreground: "#2C2626",
    surface: "#FFFFFF",
    primary: "#ED5154",
    secondary: "#546270",
    black: "#000000",
    grey: "#A8A8A8",
  };

  export type FontProps = {
    family: string;
    desktopSize: string;
    mobileSize: string;
    weight: string;
    lineHeightDesk: string;
    lineHeightMobile: string;
};


const fonts = {
    h1: {
        family: "Oswald",
        desktopSize: "46px",
        mobileSize: "26px",
        weight: "700",
        lineHeightDesk: "68px",
        lineHeightMobile: "39px",
    },
    h2: {
        family: "Anton",
        desktopSize: "95px",
        mobileSize: "36px",
        weight: "400",
        lineHeightDesk: "143px",
        lineHeightMobile: "54px",
    },
    s: {
        family: "Oswald",
        desktopSize: "24px",
        mobileSize: "14px",
        weight: "400",
        lineHeightDesk: "36px",
        lineHeightMobile: "21px",
    },
    ht2: {
        family: "Oswald",
        desktopSize: "18px",
        mobileSize: "18px",
        weight: "400",
        lineHeightDesk: "27px",
        lineHeightMobile: "27px",
    },
    b: {
        family: "Oswald",
        desktopSize: "18px",
        mobileSize: "12px",
        weight: "700",
        lineHeightDesk: "27px",
        lineHeightMobile: "18px",
    },
    ht1: {
        family: "Inter",
        desktopSize: "18px",
        mobileSize: "12px",
        weight: "400",
        lineHeightDesk: "22px",
        lineHeightMobile: "15px",
    },
    t: {
        family: "Inter",
        desktopSize: "14px",
        mobileSize: "14px",
        weight: "400",
        lineHeightDesk: "17px",
        lineHeightMobile: "17px",
    },
    l: {
        family: "Inter",
        desktopSize: "10px",
        mobileSize: "10px",
        weight: "400",
        lineHeightDesk: "17px",
        lineHeightMobile: "12px",
    },
    c: {
        family: "Inter",
        desktopSize: "18px",
        mobileSize: "18px",
        weight: "500",
        lineHeightDesk: "22px",
        lineHeightMobile: "22px",
    },
    i: {
        family: "Inter",
        desktopSize: "20px",
        mobileSize: "20px",
        weight: "400",
        lineHeightDesk: "24px",
        lineHeightMobile: "24px",
    },
    h3: {
        family: "Anton",
        desktopSize: "36px",
        mobileSize: "26px",
        weight: "400",
        lineHeightDesk: "normal",
        lineHeightMobile: "normal",
    },
    h4: {
        family: "Oswald",
        desktopSize: "28px",
        mobileSize: "14px",
        weight: "700",
        lineHeightDesk: "normal",
        lineHeightMobile: "normal",
    }
}

export const theme = {
    colors,
    fonts,
}
