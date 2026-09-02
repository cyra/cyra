// emits assets/cyra-{dark,light}.svg: "cyra" as a 5x7 pixel face, cell 8px,
// solid on top and dissolving into dither toward the baseline.
import { writeFileSync } from 'node:fs';

const GLYPHS = {
  c: ['.###.', '#...#', '#....', '#...#', '.###.', '.....', '.....'],
  y: ['#...#', '#...#', '#...#', '.####', '....#', '....#', '.###.'],
  r: ['#.##.', '##..#', '#....', '#....', '#....', '.....', '.....'],
  a: ['.###.', '....#', '.####', '#...#', '.####', '.....', '.....'],
};
const CELL = 8, GAP = 2, PAD = 8;
const word = 'cyra';
const cols = word.length * 5 + (word.length - 1) * GAP;
const W = cols * CELL + PAD * 2, H = 7 * CELL + PAD * 2;

function svg(ink) {
  const cells = [];
  let cx = 0;
  for (const ch of word) {
    GLYPHS[ch].forEach((row, y) => {
      [...row].forEach((px, x) => {
        if (px !== '#') return;
        // x-height solid; only the descender dissolves
        const fill = y < 5 ? ink : y === 5 ? 'url(#d1)' : 'url(#d2)';
        cells.push(`<rect x="${PAD + (cx + x) * CELL}" y="${PAD + y * CELL}" width="${CELL}" height="${CELL}" fill="${fill}"/>`);
      });
    });
    cx += 5 + GAP;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">
  <defs>
    <pattern id="d1" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="${ink}"/><rect x="2" y="2" width="2" height="2" fill="${ink}"/></pattern>
    <pattern id="d2" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="${ink}"/></pattern>
  </defs>
  ${cells.join('\n  ')}
</svg>
`;
}

writeFileSync('/Users/cyra/DEV/active/cyra/assets/cyra-dark.svg', svg('#7fe0c4'));
writeFileSync('/Users/cyra/DEV/active/cyra/assets/cyra-light.svg', svg('#3a4a44'));
console.log(`${W}x${H}`);
