import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
  height: auto;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  font-family: "Roboto", sans-serif;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d7e3ff;
    border-radius: 100px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #6191ff;
  }
}

button,
a {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0;
  cursor: pointer;

}

a {
  text-decoration: none;
}`;

export const colors = {
  WHITE: "#FFFFFF",
  YELLOW: "#F4C550",
  LIGHT_YELLOW: "#FBE9BA",
  GREEN: "#9FBAAE",
  LIGHT_GREEN: "#CBDED3",
  BLUE: "#9FB7CE",
  LIGHT: "#BFD6EA",
  PEACH: "#F0AA8D",
  LIGHT_PEACH: "#F4C8BA",
  ROSE: "#E0A39A",
  LIGHT_ROSE: "#F2C0BD",
  BLACK_TEXT: "#121417",
  LIGHT_BLACK_TEXT: "rgba(18, 20, 23, 0.2)",
  YELLOW_BUTTON: "#F4C550",
  YELLOW_HOVER_BUTTON: "#FFDC86",
  GREY_LABEL: "#8A8A89",
  SILVER_BACKGROUND: "#F8F8F8",
};
