export const BREAKPOINTS = {
  "sx": 576,
  "s": 768,
  "m": 992,
  "l": 1200
}

export function sizeMediaQuery(size) {
  return `@media (max-width: ${size}px)`;
}
