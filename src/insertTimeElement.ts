export function insertTimeElement(dateTime: string, element: Text) {
    const timeEl = document.createElement('time', {});
    timeEl.textContent = dateTime;
    timeEl.dateTime = dateTime;
    timeEl.className = 'ost-date';
    element.parentElement?.insertBefore(timeEl, element);
}
