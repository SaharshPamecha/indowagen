/**
 * Generates a small JSON manifest mapping each leadership team photo to a
 * short hash of its current file contents.
 *
 * Why this exists: the team photos are referenced by a fixed filename
 * (e.g. /team/Moinuddin.jpeg) that never changes even when the picture
 * behind it does. Browsers, corporate/ISP proxies, and other caches in
 * between the visitor and the server can therefore keep showing an old
 * photo indefinitely after a replacement, because nothing about the URL
 * told them the content changed.
 *
 * This script runs automatically before every build (see "prebuild" in
 * package.json) and writes src/data/image-versions.json with a hash of
 * each photo's current bytes. The component appends that hash to the
 * image URL as a `?v=` query string, so every time a photo is replaced
 * with new bytes, the URL changes automatically and every cache is forced
 * to fetch the new picture — no one needs to remember to rename a file or
 * bump a version number by hand.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');

const TEAM_PHOTOS = {
  moinuddin: 'public/team/Moinuddin.jpeg',
  dilwar: 'public/team/Dilwar.jpeg',
  rajeev: 'public/team/Rajeev.jpeg',
};

const manifest = {};

for (const [key, relPath] of Object.entries(TEAM_PHOTOS)) {
  const absPath = path.join(ROOT, relPath);
  const bytes = fs.readFileSync(absPath);
  manifest[key] = crypto.createHash('md5').update(bytes).digest('hex').slice(0, 10);
}

const outPath = path.join(ROOT, 'src', 'data', 'image-versions.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2) + '\n');

console.log('[generate-image-manifest] wrote', path.relative(ROOT, outPath), manifest);
