import { toString as convertToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

type Data = {
	astro: {
		frontmatter: {
			minutesRead: string;
		};
	};
};

export function remarkReadingTime() {
	return (tree: Node, { data }: { data: Data }) => {
		const textOnPage = convertToString(tree);
		const readingTime = getReadingTime(textOnPage);
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
}
