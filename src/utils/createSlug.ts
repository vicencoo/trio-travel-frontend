export const createSlug = (
  text: string | undefined,
  id: number | string | undefined,
) => {
  return (
    text &&
    text
      .toLowerCase()
      .trim()
      .replace(/ë/g, 'e')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '') // heq karakteret speciale
      .replace(/\s+/g, '-') // spaces → -
      .replace(/-+/g, '-') + // multiple - → one
      `-${id}`
  );
};
