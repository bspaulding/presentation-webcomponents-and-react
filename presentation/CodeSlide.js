import React from "react";
import CodeSlide from "spectacle-code-slide";
import { theme } from "spectacle-theme-solarized-dark";

class MyCodeSlide extends React.Component {
	render() {
		const { props } = this;

		return <CodeSlide {...props} bgColor={theme.screen.colors.primary}/>
	}
}

export default MyCodeSlide;
