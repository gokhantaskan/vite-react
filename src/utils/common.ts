// wait for a given time in milliseconds
export function awaiter(milliseconds: number = 10) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// TODO: improve
export function focusOnFirstInvalidInput(element: HTMLElement | null) {
  if (!element) return;

  const focusableElements = element.querySelectorAll(".in-error-state input");
  const firstElement = focusableElements[0] as HTMLInputElement;

  if (firstElement) {
    firstElement.focus();
  }
}
