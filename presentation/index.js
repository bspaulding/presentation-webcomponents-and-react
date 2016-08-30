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
	Spectacle
} from "spectacle";
import {
	Text
} from "./Text";
import CodeSlide from "spectacle-code-slide";
import { theme } from "./theme";
import { images } from "./images";
import { links } from "./links";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={["slide"]} transitionDuration={300} progress={"pacman"}>
			<Slide>
				<Heading>WebComponents and React</Heading>
				<Link href="https://github.com/bspaulding">
					<Text textSize={22}>
						github/bspaulding
					</Text>
				</Link>
			</Slide>
			<Slide>
				<Heading>WebComponents</Heading>
				<div style={{ float: "left", width: "50%" }}>
					<Image src={images.specTemplates}/>
					<Text>Templates</Text>
				</div>
				<div style={{ float: "left", width: "50%" }}>
					<Image src={images.specHTMLImports}/>
					<Text>HTML Imports</Text>
				</div>
				<div style={{ float: "left", width: "50%" }}>
					<Image src={images.specCustomElementsLogo}/>
					<Text>Custom Elements</Text>
				</div>
				<div style={{ float: "left", width: "50%" }}>
					<Image src={images.specShadowDOM}/>
					<Text>Shadow DOM</Text>
				</div>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="html"
				code={require("./examples/template.html.example").trim()}
				ranges={[{
					loc: [0, 9], title: "HTML Templates",
				}, {
					locs: [[2, 3], [7, 8]], title: "<template> element"
				}, {
					loc: [3, 7], title: "template contents"
				}]}
			/>
			<CodeSlide
				transition={[]}
				lang="js"
				code={require("./examples/template.js.example").trim()}
				ranges={[{
					loc: [0, 1], title: "get template"
				}, {
					locs: [[2, 3], [9, 10]], title: "get some data"
				}, {
					loc: [3, 4], title: "clone content"
				}, {
					loc: [4, 8], title: "update elements"
				}, {
					loc: [8, 9], title: "append fragment"
				}]}
			/>
			<Slide>
				<Heading>HTML Imports</Heading>
			</Slide>
			<Slide>
				<Heading>Custom Elements</Heading>
			</Slide>
			<Slide>
				<Heading>Shadow DOM</Heading>
			</Slide>
			<Slide>
				<Heading>Links</Heading>
				<List>
					{links.map(({ title, url }) => (
						<ListItem>
							<Link href={url} target="_blank">
								{title}
							</Link>
						</ListItem>
					))}
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
