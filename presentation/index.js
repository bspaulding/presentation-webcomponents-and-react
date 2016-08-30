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
				<Heading fit={true}>WebComponents and React</Heading>
			</Slide>
			<Slide>
				<Heading fit={true}>What are WebComponents?</Heading>
				<div style={{ float: "left", padding: 20, width: "50%" }}>
					<Appear>
						<div>
						<Image src={images.specTemplates}/>
						<Text>Templates</Text>
						</div>
					</Appear>
				</div>
				<div style={{ float: "left", padding: 20, width: "50%" }}>
					<Appear>
						<div>
						<Image src={images.specCustomElementsLogo}/>
						<Text>Custom Elements</Text>
						</div>
					</Appear>
				</div>
				<div style={{ float: "left", padding: 20, width: "50%" }}>
					<Appear>
						<div>
						<Image src={images.specShadowDOM}/>
						<Text>Shadow DOM</Text>
						</div>
					</Appear>
				</div>
				<div style={{ float: "left", padding: 20, width: "50%" }}>
					<Appear>
						<div>
							<Image src={images.specHTMLImports}/>
							<Text>HTML Imports</Text>
						</div>
					</Appear>
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
				showLineNumbers={false}
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
				showLineNumbers={false}
			/>
			<Slide>
				<Heading fit={true}>Do HTML Templates React?</Heading>
			</Slide>
			<Slide>
				<Heading>Custom Elements</Heading>
			</Slide>
			<Slide>
				<Heading fit={true}>Do Custom Elements React?</Heading>
			</Slide>
			<Slide>
				<Heading>Shadow DOM</Heading>
			</Slide>
			<Slide>
				<Heading fit={true}>Does Shadow DOM React?</Heading>
			</Slide>
			<Slide>
				<Heading>HTML Imports</Heading>
				<BlockQuote>
					<Quote textColor={theme.screen.colors.quartenary}>a way to include and reuse HTML documents in other HTML documents.</Quote>
					<Cite>w3c.github.io/webcomponents/spec/imports</Cite>
				</BlockQuote>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="html"
				code={require("./examples/imports.html.example").trim()}
				ranges={[{
					loc: [0, 8], title: "link type=\"import\""
				}, {
					loc: [2, 4], title: "link type=\"import\""
				}]}
				showLineNumbers={false}
			/>
			<CodeSlide
				transition={[]}
				lang="js"
				code={require("./examples/imports-using.js.example").trim()}
				ranges={[{
					loc: [0, 6], title: "Using Imports"
				}, {
					loc: [0, 1], title: "grab the link"
				}, {
					loc: [2, 3], title: "link.import = doc"
				}, {
					loc: [4, 7], title: "profit?"
				}]}
				showLineNumbers={false}
			/>
			<CodeSlide
				transition={[]}
				lang="js"
				code={require("./examples/imports-whats-in.html.example").trim()}
				ranges={[{
					loc: [0, 0], title: "What's inside?"
				}, {
					loc: [0, 2], title: "more imports!"
				}, {
					loc: [3, 5], title: "more links"
				}, {
					loc: [6, 9], title: "templates"
				}, {
					loc: [10, 13], title: "external scripts"
				}, {
					loc: [13, 14], title: "internal scripts"
				}, {
					loc: [14, 16], title: "internal scripts"
				}, {
					locs: [[17, 18], [22, 23]], title: "internal scripts"
				}, {
					loc: [18, 22], title: "internal scripts"
				}, {
					loc: [18, 19], title: "internal scripts"
				}, {
					loc: [24, 27], title: "internal scripts"
				}]}
				showLineNumbers={false}
			/>
			<Slide>
				<Heading fit={true}>Do HTML Imports React?</Heading>
			</Slide>
			<Slide>
				<Heading fit={true}>Does React do WebComponents?</Heading>
				React is too big, use preact!
			</Slide>
			<Slide>
				<Heading>Links</Heading>
				<List>
					{links.map(({ title, url }) => (
						<ListItem key={url}>
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
