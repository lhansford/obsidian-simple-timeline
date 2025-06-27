export function insertTimeElement(dateTime: string, element: Text) {
	element.parentElement?.createEl("time", {
		prepend: true,
		text: dateTime,
		cls: "ost-date",
		attr: {
			datetime: dateTime,
		},
	});
}
