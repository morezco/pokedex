export const Clean = (x: string) =>
  String(x)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export const ExtractProperty = (x: any) => Clean(x?.name || x?.url || '');
