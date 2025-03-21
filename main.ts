import { Plugin } from 'obsidian';

function extractDate(text: string) {
	const match = text.match(/(\d{4}-\d{2}-\d{2}):/); // TODO: No idea if this is correct.
	if (match) {
		return match[1];
	}
	return null;
}

export default class MyPlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((el, ctx) => {

			el.findAll('li:not(li ul li)').forEach((el) => {
				el.childNodes.forEach((child) => {
					if (child instanceof Text) {
						const date = extractDate(child.textContent);
						if (date) {
							child.textContent = child.textContent.replace(date + ': ', '');

							const timeEl = document.createElement('time', {});
							timeEl.textContent = date;
							timeEl.dateTime = date;
							timeEl.style.position = 'absolute';
							timeEl.style.left = '-6rem';
							timeEl.style.fontSize = '0.8rem';
							timeEl.style.fontStyle = 'italic';
							timeEl.style.display = 'flex';
							timeEl.style.height = '24px';
							timeEl.style.alignItems = 'center';

							child.parentElement.insertBefore(timeEl, child);
							return;
							}
					}
				});
			});
		});
	}
}
