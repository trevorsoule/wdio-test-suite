import AutomationTest from '../../page-objects/cyberfuse.page';
import ImageCompare from '../utils/ImageCompare';
import PageLoad from '../utils/PageLoad';
import DownloadImage from '../utils/DownloadImage';

/*
1) Write a test that will verify that the canvas has loaded properly by verifying the class "loader loader--show" exists.
2) Write a test that automates changing the text "CyberFuse" to "SourceFuse."
3) Write a test that rotates the camera clockwise, takes a screenshot (you can leverage the Screenshot button on the canvas if needed), and stores the image.
4) Write a test that toggles the Bump and Light checkboxes, takes a screenshot, and stores the image.
5) Write a test that can compare the two saved images above to verify the changes were properly made.
*/

let pageLoad = new PageLoad();
describe('3D Automation Test', () => {
    describe('Test: Will verify that the canvas has loaded properly by verifying the class "loader loader--show" exists', () => {
        it('When: I navigate to the dummy automation site', async () => {
            await browser.url('https://automation-dummy.vercel.app/');
        });
        it('Then: The loading indicator should be visible', async () => {
            await expect(AutomationTest.lblLoadingIndicator).toBeDisplayed();
        });
    });

    describe('Test: Automates changing the text "CyberFuse" to "SourceFuse"', () => {
        it('When: I use the text field to change the center text to "<SourceFuse/>"', async () => {
            await browser.waitUntil(async () => {
                return await AutomationTest.lblLoadingIndicator.isDisplayed() == false;
            }, 5000, 'Spinner is still visible');
            await DownloadImage('label-view.png', 0);
            await AutomationTest.txtCenterText.setValue('<SourceFuse/>');
        });
        it('Then: The center text label displays "<SourceFuse/>"', async () => {
            await DownloadImage('label-view-changed.png', 0);
            await expect(AutomationTest.txtCenterText).toHaveValue('<SourceFuse/>');
            await ImageCompare('screenshots/label-view.png', 'screenshots/label-view-changed.png', false, 'label-change');
        });
    });

    describe('Test: Rotates the camera clockwise, takes a screenshot, and stores the image', () => {
        it('When: I rotate the canvas clockwise', async () => {
            await DownloadImage('front-view.png', 0);
            await AutomationTest.canvas3dObject.dragAndDrop({
                x: -300,
                y: 400
            }, {
                duration: 500
            });
            await pageLoad.waitForPageReady();
            await DownloadImage('side-view.png', 0);
        });
        it('Then: Take a screenshot of the image and verify a change', async () => {
            await ImageCompare('screenshots/front-view.png', 'screenshots/side-view.png', false, 'rotate-change');
        });
    });

    describe('Test: Toggles the Bump and Light checkboxes, takes a screenshot, and stores the image', () => {
        it('When: I toggle the bump and lighting toggles', async () => {
            await AutomationTest.toggleBump.click();
            await AutomationTest.toggleLighting.click();
        });
        it('Then: Take a screenshot and verify a change', async () => {
            //await pageLoad.waitForPageReady();
            await DownloadImage('side-view-bump-lighting.png', 300);

        });
    });
    // This test verifies that there are differences between the original image, and the image that has bump and lighting enabled
    describe('Test: Compares the two saved images to verify changes were made', () => {
        it('Final: I compare the two screenshots', async () => {
            await ImageCompare('screenshots/side-view.png', 'screenshots/side-view-bump-lighting.png', false, 'effects-change');
        });
    });
});