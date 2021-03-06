export function getUserID(url: string) {
  const id = url.split("/");

  return id[4].slice(0, 4);
}
