import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = './src/assets';
const MAX_WIDTH = 900; // project card images don't need to be wider than this

const files = readdirSync(assetsDir).filter(f =>
  f.startsWith('proj-') && ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

for (const file of files) {
  const inputPath = join(assetsDir, file);
  const sizeBefore = statSync(inputPath).size;
  const ext = extname(file).toLowerCase();

  try {
    const image = sharp(inputPath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

    // Convert PNGs to JPEG for major size savings (project screenshots don't need transparency)
    const outputPath = ext === '.png'
      ? join(assetsDir, basename(file, ext) + '.jpg')
      : inputPath;

    await image.jpeg({ quality: 78, mozjpeg: true }).toFile(outputPath + '.tmp');

    // Overwrite the source
    const { rename, unlink } = await import('fs/promises');
    await rename(outputPath + '.tmp', outputPath);

    const sizeAfter = statSync(outputPath).size;
    const saving = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(`✓ ${file} → ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB  (${saving}% smaller)`);
  } catch (e) {
    console.error(`✗ ${file}:`, e.message);
  }
}
