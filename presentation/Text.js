import React from "react";
import {
	Text as _Text
} from "spectacle";
import { theme } from "./theme";

export const Text = (props) =>
  <_Text {...props} textColor={theme.screen.colors.quartenary}/>;
