// Turns free-form admin text (markdown, emojis, line breaks) into a clean
// meta description that fits in Google's snippet.
export const seoDescription = (
  text: string | undefined,
  fallback: string,
  maxLength = 155,
) => {
  const clean = (text ?? '')
    .replace(/[*_#>`~]/g, '')
    .replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}️‍]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!clean) return fallback;
  if (clean.length <= maxLength) return clean;

  const cut = clean.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > 80 ? cut.slice(0, lastSpace) : cut}…`;
};
