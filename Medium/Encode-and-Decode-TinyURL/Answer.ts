/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const splitUrl: string[] = longUrl.split("/");
  return (
    splitUrl.slice(0, 3).join("/") + "/" + btoa(splitUrl.slice(3).join("/"))
  );
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const splitUrl: string[] = shortUrl.split("/");
  return (
    splitUrl.slice(0, 3).join("/") + "/" + atob(splitUrl.slice(3).join("/"))
  );
}
