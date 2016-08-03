import React from "react";
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Fit,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
const images = {
	githubLogo: require("../assets/GitHub-Mark-32px.png"),
	reactLogo: require("../assets/logo-react.svg"),
	webcomponentsLogo: require("../assets/logo-webcomponents.svg"),
};
preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
	primary: "#ff4081"
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={["slide"]} transitionDuration={300} progress={"pacman"}>
			<Slide>
				<Heading>WebComponents and React</Heading>
				<Link href="https://github.com/bspaulding">
					<Text textSize={22}>
						<Image src={images.githubLogo} display={"inline"} width={22} height={22} style={{
							margin: 0, marginRight: 4,
							position: "relative",
							top: 3
						}}/>
						github/bspaulding
					</Text>
				</Link>
			</Slide>
			<Slide>
				<Heading>WebComponents</Heading>
				<Text>Templates</Text>
				<Text>HTML Imports</Text>
				<Text>Custom Elements</Text>
				<Text>Shadow DOM</Text>
			</Slide>
			<Slide>
				<Heading>Templates</Heading>
			</Slide>
			<Slide>
				<Heading>HTML Imports</Heading>
			</Slide>
			<Slide>
				<Heading>Custom Elements</Heading>
			</Slide>
			<Slide>
				<Heading>Shadow DOM</Heading>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;

