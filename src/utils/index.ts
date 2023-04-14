// wait for a given time in milliseconds
export function awaiter(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
