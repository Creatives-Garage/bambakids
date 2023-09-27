export function removeAfterLastSlash(inputString: string): string {
  const lastIndexOfSlash = inputString.lastIndexOf("/");
  return lastIndexOfSlash !== -1
    ? inputString.slice(0, lastIndexOfSlash)
    : inputString;
}
