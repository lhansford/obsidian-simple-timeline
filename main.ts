import { Plugin } from 'obsidian';
import { extractDateTime } from 'src/extractDateTime';
import { insertTimeElement } from 'src/insertTimeElement';


export default class SimpleTimelinePlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((el, ctx) => {
			let previousElDateTime: string | null = null;

			el.findAll('li:not(li ul li)').forEach((el) => {
				el.childNodes.forEach((child) => {
					if (child instanceof Text) {
						const match = extractDateTime(child.textContent || '');
						if (match.dateTime) {
							const { modifiedText, dateTime } = match;
							child.textContent = modifiedText

							if (previousElDateTime !== dateTime) {
								insertTimeElement(dateTime, child);
							}

							previousElDateTime = dateTime;
						} else {
							previousElDateTime = null;
						}
					}
				});
			});
		});
	}
}
