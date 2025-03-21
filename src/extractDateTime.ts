const DATE_REGEX = /^\d{4}-\d{2}-\d{2}:/g;
const DATE_TIME_REGEX = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:/g;

export function extractDateTime(text: string): { modifiedText: string, dateTime: string | null } {
  const match = text.match(DATE_REGEX) || text.match(DATE_TIME_REGEX);
	if (match) {
		return {
			modifiedText: text.replace(match[0], '').trimStart(),
			dateTime: match[0].substring(0, match[0].length - 1)
		}
	}
  return { modifiedText: text, dateTime: null };
}
