export const basePath = '/emeags';

export const prefixPath = (path) => {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
};
