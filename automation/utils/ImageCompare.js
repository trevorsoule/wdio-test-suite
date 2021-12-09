import fs from 'fs'
const PNG = require('pngjs').PNG;
import pixelmatch from 'pixelmatch';

/**
 * Image comparison
 *
 * @param {string} sc1 Path to image for comparison
 * @param {string} sc2 Path to image that will be compared to sc1
 * @param {boolean} compare True/false depending on if the image should match (true) or not (false)
 */
async function ImageCompare(sc1, sc2, compare, incre) {
    const img1 = PNG.sync.read(fs.readFileSync(sc1));
    const img2 = PNG.sync.read(fs.readFileSync(sc2));
    const {width, height} = img1;
    const diff = new PNG({width, height});
      
    let isDiff = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.0});
    fs.writeFileSync('screenshots/diff-' + incre + '.png', PNG.sync.write(diff));
        expect(isDiff == 0).toBe(compare);
      
} export default ImageCompare;