var fs = require('fs').promises;
import AutomationTest from '../../page-objects/cyberfuse.page';
/**
 * Download Image
 *
 * @param {string} name Image name
 */
async function DownloadImage(name) {
    await browser.pause(500);
    await AutomationTest.btnTakeScreenshot.click();
    await browser.pause(500);
    const imgSource = await $('img');
    const img = await imgSource.getAttribute('src');
    const data = await img.replace(/^data:image\/\w+;base64,/, '');
    const buf = await Buffer.from(data, "base64");
    await fs.writeFile('screenshots/' + name, buf);
} export default DownloadImage; 