import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class ToggleTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark, toggleTheme } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <button
              style={{ background: theme.ui, color: theme.syntax }}
              onClick={toggleTheme}
            >
              Toggle the Theme
            </button>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
