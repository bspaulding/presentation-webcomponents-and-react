// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
export const images = {
	githubLogo: require("../assets/GitHub-Mark-32px.png"),
	reactLogo: require("../assets/logo-react.svg"),
	webcomponentsLogo: require("../assets/logo-webcomponents.svg"),
	specCustomElementsLogo: require("../assets/icon-spec-customelements.png"),
	specHTMLImports: require("../assets/icon-spec-htmlimports.png"),
	specShadowDOM: require("../assets/icon-spec-shadowdom.png"),
	specTemplates: require("../assets/icon-spec-templates.png"),
};
preloader(images);

