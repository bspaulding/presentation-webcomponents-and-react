import React from "react";
import {
	Appear,
	BlockQuote,
	Cite,
	Code,
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
import CodeSlide from "spectacle-code-slide";
import { theme } from "spectacle-theme-solarized-dark";
import { images } from "./images";
import { links } from "./links";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

class Presentation extends React.Component {
	render() {
		return (
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
					<Slide>
						<Image src={images.specTemplates}/>
						<Text>HTML Templates</Text>
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
						<Heading fit={true}>Does it React?</Heading>
						<Appear>
							<Image src={images.noReactObama.replace("/", "")} height={"100%"}/>
						</Appear>
					</Slide>
					<Slide>
						<Image src={images.specCustomElementsLogo}/>
						<Text>Custom Elements</Text>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="html"
						code={require("./examples/custom-element.html.example").trim()}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "Custom Elements"
						}, {
							loc: [0, 1], title: "Custom Elements"
						}, {
							locs: [[0, 1], [2, 3]], title: "Custom Elements"
						}, {
							locs: [[5, 6], [7, 8]], title: "with props"
						}, {
							locs: [[10, 11], [12, 13]], title: "with children"
						}]}
					/>
					<Slide>
						<Heading fit>Custom Element API v1</Heading>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("./examples/custom-element.js.example").trim()}
						ranges={[{
							loc: [0, 1], title: "extend HTMLElement"
						}, {
							loc: [1, 4], title: "componentWillMount"
						}, {
							loc: [5, 8], title: "componentDidMount"
						}, {
							loc: [9, 13], title: "componentDidUpdate"
						}, {
							loc: [14, 17], title: "componentWillUnmount"
						}, {
							loc: [19, 21], title: "register"
						}]}
					/>
					<Slide>
						<Heading fit={true}>Do Custom Elements React?</Heading>
						<Appear>
							<Image src={images.reactPrince} width={"100%"} height={"100%"}/>
						</Appear>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("./examples/custom-element-hoc.js.example").trim()}
						ranges={[{
							loc: [0, 2], title: "HOC!"
						}, {
							loc: [3, 5], title: "extend HTMLElement"
						}, {
							loc: [6, 7], title: "renderElement()"
						}, {
							loc: [7, 13], title: "NamedNodeMap -> {}"
						}, {
							loc: [14, 18], title: "just render!"
						}, {
							loc: [20, 24], title: "just keep rendering!"
						}, {
							loc: [25, 30], title: "unmount"
						}, {
							loc: [31, 35], title: "registerElement"
						}, {
							loc: [32, 33], title: "displayName default"
						}]}
					/>
					<Slide>
						<Code>npm i preact-custom-element</Code>
						<Appear style={{ paddingTop: 20 }}>
							<Text>react is too big...</Text>
						</Appear>
					</Slide>
					<Slide>
						<Image src={images.specShadowDOM}/>
						<Text>Shadow DOM</Text>
					</Slide>
					<Slide transition={["slide"]}>
						<Image src={images.specShadowDOM}/>
						<Text>Functional Encapsulation for DOM</Text>
						<Appear style={{ paddingTop: 20 }}>
						<Text>Functional Encapsulation of CSS!</Text>
						</Appear>
					</Slide>
					<Slide>
						<Heading>Scoped CSS</Heading>
						<List>
							<Appear>
							<ListItem padding={20}>
								CSS selectors from the outer page don’t apply inside your component.
							</ListItem>
							</Appear>
							<Appear>
							<ListItem>
								Styles defined inside don’t bleed out. They’re scoped to the host element.
							</ListItem>
							</Appear>
						</List>
						<Cite>http://bit.ly/2ciTjHU</Cite>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("./examples/shadow-dom.js.example").trim()}
						ranges={[{
							loc: [0, 0], title: "Using Shadow DOM"
						}, {
							loc: [0, 1], title: "grab a DOM node"
						}, {
							loc: [2, 3], title: "create shadow root"
						}, {
							loc: [4, 14], title: "append stuffs"
						}, {
							loc: [8, 12], title: "common names!"
						}]}
					/>
					<Slide>
						<Heading fit={true}>Does Shadow DOM React?</Heading>
						<Appear>
							<Image src={images.reactSnoop} height={"100%"} width={"100%"}/>
						</Appear>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("./examples/shadow-dom-hoc.js.example").trim()}
						ranges={[{
							loc: [0, 1], title: "ShadowDOM HOC",
						}, {
							loc: [1, 2], title: "comp + css in"
						}, {
							loc: [3, 5], title: "return new comp"
						}, {
							loc: [6, 11], title: "get a ref"
						}, {
							loc: [12, 13], title: "can haz node"
						}, {
							loc: [13, 14], title: "make shadow root"
						}, {
							loc: [14, 18], title: "render"
						}, {
							loc: [14, 18], title: "its just a portal!"
						}, {
							loc: [18, 20], title: "slam doz stylez"
						}]}
					/>
					<Slide>
						<Code>npm i preact-shadow-dom</Code>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("./examples/shadow-dom-hoc-usage.js.example").trim()}
						ranges={[{
							loc: [0, 0], title: "use shadow dom hoc"
						}, {
							loc: [0, 1], title: "import hoc"
						}, {
							loc: [1, 2], title: "import css"
						}, {
							loc: [3, 5], title: "build comp"
						}, {
							loc: [6, 8], title: "wrap it"
						}]}
					/>
					<Slide>
						<Image src={images.specHTMLImports}/>
						<Text>HTML Imports</Text>
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
							loc: [0, 7], title: "Using Imports"
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
						<Appear>
							<Image src={images.reactZMorris} width={"100%"} height={"100%"}/>
						</Appear>
					</Slide>
					<Slide>
						<Heading fit={true}>react no likey:</Heading>
						<List>
							<Appear>
								<ListItem>
									rendering Custom Elements
									<Text style={{
										fontSize: 32,
										paddingLeft: 32
									}}>preact works, but double renders</Text>
								</ListItem>
							</Appear>
							<Appear style={{ paddingTop: 20 }}>
								<ListItem>Light DOM slots</ListItem>
							</Appear>
						</List>
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
					<Slide>
						<Heading>thank you!</Heading>
						<Image src={images.thanks} height={"100%"} width={"100%"}/>
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}

export default Presentation;
